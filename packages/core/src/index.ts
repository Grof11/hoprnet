/// <reference path="./@types/libp2p.ts" />
import LibP2P from 'libp2p'
import MPLEX = require('libp2p-mplex')
// @ts-ignore
import KadDHT = require('libp2p-kad-dht')
// @ts-ignore
import SECIO = require('libp2p-secio')

import TCP from './network/transport'

import { Packet } from './messages/packet'
import { PACKET_SIZE, MAX_HOPS, VERSION } from './constants'

import { Network } from './network'

import { addPubKey, getPeerInfo, pubKeyToPeerId } from './utils'
import { createDirectoryIfNotExists, u8aToHex } from '@hoprnet/hopr-utils'
import { existsSync } from 'fs'

import levelup, { LevelUp } from 'levelup'
import leveldown from 'leveldown'
import Multiaddr from 'multiaddr'
import chalk from 'chalk'

import Debug from 'debug'
const log = Debug(`hopr-core`)

import PeerId from 'peer-id'
import PeerInfo from 'peer-info'

import type HoprCoreConnector from '@hoprnet/hopr-core-connector-interface'
import type { HoprCoreConnectorStatic, Types } from '@hoprnet/hopr-core-connector-interface'
import HoprCoreEthereum from '@hoprnet/hopr-core-ethereum'
import BN from 'bn.js'

import { Interactions } from './interactions'
import * as DbKeys from './dbKeys'

const verbose = Debug('hopr-core:verbose')

interface NetOptions {
  ip: string
  port: number
}

export type HoprOptions = {
  debug: boolean
  db?: LevelUp
  dbPath?: string
  peerId?: PeerId
  peerInfo?: PeerInfo
  password?: string
  id?: number
  bootstrapNode?: boolean
  network: string
  connector?: HoprCoreConnectorStatic
  bootstrapServers?: PeerInfo[]
  provider: string
  output?: (encoded: Uint8Array) => void
  hosts?: {
    ip4?: NetOptions
    ip6?: NetOptions
  }
}

const MAX_ITERATIONS_PATH_SELECTION = 2000

class Hopr<Chain extends HoprCoreConnector> extends LibP2P {

  // TODO make these actually private
  public _interactions: Interactions<Chain>
  public _network: Network
  // Allows us to construct HOPR with falsy options
  public _debug: boolean
  public _dbKeys = DbKeys

  public output: (arr: Uint8Array) => void
  public isBootstrapNode: boolean
  public bootstrapServers: PeerInfo[]
  public initializedWithOptions: HoprOptions


  /**
   * @constructor
   *
   * @param _options
   * @param provider
   */
  private constructor(options: HoprOptions, public db: LevelUp, public paymentChannels: Chain) {
    super({
      peerInfo: options.peerInfo,

      // Disable libp2p-switch protections for the moment
      switch: {
        denyTTL: 1,
        denyAttempts: Infinity
      },
      // The libp2p modules for this libp2p bundle
      modules: {
        transport: [TCP],
        streamMuxer: [MPLEX],
        connEncryption: [SECIO],
        dht: KadDHT
      },
      config: {
        transport: {
          TCP: {
            bootstrapServers: options.bootstrapServers
          }
        },
        dht: {
          enabled: true
        },
        relay: {
          enabled: false
        }
      }
    })

    this.initializedWithOptions = options
    this.output = options.output || console.log
    this.bootstrapServers = options.bootstrapServers || []
    this.isBootstrapNode = options.bootstrapNode || false

    this._interactions = new Interactions(this)
    this._network = new Network(this, this._interactions, options)

    verbose('# STARTED NODE')
    verbose('ID', this.peerInfo.id.toB58String())
    verbose('Protocol version', VERSION)
    this._debug = options.debug
  }

  /**
   * Creates a new node.
   *
   * @param options the parameters
   */
  public static async create<CoreConnector extends HoprCoreConnector>(options: HoprOptions): Promise<Hopr<CoreConnector>> {
    const Connector = options.connector ?? HoprCoreEthereum
    const db = Hopr.openDatabase(options, Connector.constants.CHAIN_NAME, Connector.constants.NETWORK)

    options.peerInfo = options.peerInfo || (await getPeerInfo(options, db))

    if (
      !options.debug &&
      !options.bootstrapNode &&
      (options.bootstrapServers == null || options.bootstrapServers.length == 0)
    ) {
      throw Error(`Cannot start node without a bootstrap server`)
    }

    let connector = (await Connector.create(db, options.peerInfo.id.privKey.marshal(), {
      provider: options.provider,
      debug: options.debug
    })) as CoreConnector

    verbose('Created connector, now creating node')
    return await new Hopr<CoreConnector>(options, db, connector).start()
  }

  /**
   * Parses the bootstrap servers given in `.env` and tries to connect to each of them.
   *
   * @throws an error if none of the bootstrapservers is online
   */
  private async connectToBootstrapServers(): Promise<void> {
    const potentialBootstrapServers = this.bootstrapServers.filter(
      (addr: PeerInfo) => !addr.id.equals(this.peerInfo.id)
    )

    if (potentialBootstrapServers.length == 0) {
      if (this._debug != true && !this.isBootstrapNode) {
        throw Error(
          `Can't start HOPR without any known bootstrap server. You might want to start this node as a bootstrap server.`
        )
      }

      return
    }

    const results = await Promise.all(
      potentialBootstrapServers.map((addr: PeerInfo) =>
        this.dial(addr).then(
          () => true,
          () => false
        )
      )
    )

    if (!results.some((online: boolean) => online)) {
      throw Error('Unable to connect to any known bootstrap server.')
    }
  }

  /**
   * This method starts the node and registers all necessary handlers. It will
   * also open the database and creates one if it doesn't exists.
   *
   * @param options
   */
  public async start(): Promise<Hopr<Chain>> {
    await Promise.all([
      super.start().then(() => Promise.all([this.connectToBootstrapServers(), this._network.start()])),
      this.paymentChannels?.start()
    ])

    log(`Available under the following addresses:`)

    this.peerInfo.multiaddrs.forEach((ma: Multiaddr) => log(ma.toString()))

    return this
  }

  /**
   * Shuts down the node and saves keys and peerBook in the database
   */
  public async stop(): Promise<void> {
    await Promise.all([this._network.stop(), this.paymentChannels?.stop().then(() => log(`Connector stopped.`))])

    await Promise.all([this.db?.close().then(() => log(`Database closed.`)), super.stop()])

    // Give the operating system some extra time to close the sockets
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  /**
   * Sends a message.
   *
   * @notice THIS METHOD WILL SPEND YOUR ETHER.
   * @notice This method will fail if there are not enough funds to open
   * the required payment channels. Please make sure that there are enough
   * funds controlled by the given key pair.
   *
   * @param msg message to send
   * @param destination PeerId of the destination
   * @param intermediateNodes optional set path manually
   * the acknowledgement of the first hop
   */
  async sendMessage(
    msg: Uint8Array,
    destination: PeerId,
    getIntermediateNodesManually?: () => Promise<PeerId[]>
  ): Promise<void> {
    const promises: Promise<void>[] = []

    for (let n = 0; n < msg.length / PACKET_SIZE; n++) {
      promises.push(
        new Promise<void>(async (resolve, reject) => {
          let path: PeerId[]
          if (getIntermediateNodesManually != undefined) {
            verbose('manually creating path')
            path = await getIntermediateNodesManually()
          } else {
            path = await this.getIntermediateNodes(destination)
          }

          path.push(destination)

          let packet: Packet<Chain>
          verbose('creating packet with path', path.join(', \n'))
          try {
            packet = await Packet.create(
              this,
              msg.slice(n * PACKET_SIZE, Math.min(msg.length, (n + 1) * PACKET_SIZE)),
              await Promise.all(path.map(addPubKey))
            )
          } catch (err) {
            return reject(err)
          }

          const unAcknowledgedDBKey = this._dbKeys.UnAcknowledgedTickets(packet.challenge.hash)

          await this.db.put(Buffer.from(unAcknowledgedDBKey), Buffer.from(''))

          this._interactions.packet.acknowledgment.once(u8aToHex(unAcknowledgedDBKey), () => {
            resolve()
          })

          try {
            await this._interactions.packet.forward.interact(path[0], packet)
          } catch (err) {
            return reject(err)
          }
        })
      )
    }

    try {
      await Promise.all(promises)
    } catch (err) {
      log(`Could not send message. Error was: ${chalk.red(err.message)}`)
      throw err
    }
  }

  /**
   * Ping a node.
   *
   * @param destination PeerId of the node
   * @returns latency
   */
  public async ping(destination: PeerId): Promise<{info: string, latency: number}> {
    if (!PeerId.isPeerId(destination)) {
      throw Error(`Expecting a non-empty destination.`)
    }
    let info = ''
    if (this._network.networkPeers.hasBlacklisted(destination)){
      info = '[Ping blacklisted peer]'
    }
    let latency = await this._interactions.network.heartbeat.interact(destination)
    return {latency, info}
  }


  public getConnectedPeers(): PeerId[] {
    return this._network.networkPeers.peers.map(x => x.id)
  }

  public async crawl(filter?: (peer: PeerId) => boolean): Promise<void>{
    return this._network.crawler.crawl(filter)
  }

  /**
   * Open a payment channel
   *
   * @param counterParty the counter party's peerId
   * @param amountToFund the amount to fund in HOPR(wei)
   */
  public async openChannel(
    counterParty: PeerId,
    amountToFund: BN
  ): Promise<{
    channelId: Types.Hash
  }> {
    const { utils, types, account } = this.paymentChannels
    const self = this.peerInfo.id

    const channelId = await utils.getId(
      await utils.pubKeyToAccountId(self.pubKey.marshal()),
      await utils.pubKeyToAccountId(counterParty.pubKey.marshal())
    )

    const myAvailableTokens = await account.balance

    // validate 'amountToFund'
    if (amountToFund.lten(0)) {
      throw Error(`Invalid 'amountToFund' provided: ${amountToFund.toString(10)}`)
    } else if (amountToFund.gt(myAvailableTokens)) {
      throw Error(`You don't have enough tokens: ${amountToFund.toString(10)}<${myAvailableTokens.toString(10)}`)
    }

    const amPartyA = utils.isPartyA(
      await utils.pubKeyToAccountId(self.pubKey.marshal()),
      await utils.pubKeyToAccountId(counterParty.pubKey.marshal())
    )

    const channelBalance = types.ChannelBalance.create(
      undefined,
      amPartyA
        ? {
            balance: amountToFund,
            balance_a: amountToFund
          }
        : {
            balance: amountToFund,
            balance_a: new BN(0)
          }
    )

    await this.paymentChannels.channel.create(
      counterParty.pubKey.marshal(),
      async () => this._interactions.payments.onChainKey.interact(counterParty),
      channelBalance,
      (balance: Types.ChannelBalance): Promise<Types.SignedChannel> =>
        this._interactions.payments.open.interact(counterParty, balance)
    )

    return {
      channelId
    }
  }


  public async closeChannel(peerId: PeerId): Promise<{receipt: string, status: string}> {
      const channel = await this.paymentChannels.channel.create(
        peerId.pubKey.marshal(),
        async (counterparty: Uint8Array) =>
          this._interactions.payments.onChainKey.interact(await pubKeyToPeerId(counterparty))
      )

      const status = await channel.status

      if (!(status === 'OPEN' || status === 'PENDING')) {
        throw new Error('To close a channel, it must be open or pending for closure')
      }

      const receipt = await channel.initiateSettlement()
      return {receipt, status}
  }



  /**
   * Takes a destination and samples randomly intermediate nodes
   * that will relay that message before it reaches its destination.
   *
   * @param destination instance of peerInfo that contains the peerId of the destination
   */
  async getIntermediateNodes(destination: PeerId): Promise<PeerId[]> {
    const start = new this.paymentChannels.types.Public(this.peerInfo.id.pubKey.marshal())
    const exclude = [
      destination.pubKey.marshal(),
      ...this.bootstrapServers.map((pInfo) => pInfo.id.pubKey.marshal())
    ].map((pubKey) => new this.paymentChannels.types.Public(pubKey))

    return await Promise.all(
      (
        await this.paymentChannels.path.findPath(
          start,
          MAX_HOPS - 1, // Need a hop for destination node
          MAX_ITERATIONS_PATH_SELECTION,
          (node) => !exclude.includes(node)
        )
      ).map((pubKey) => pubKeyToPeerId(pubKey))
    )
  }

  private static openDatabase(options: HoprOptions, chainName: string, network: string): LevelUp {
    if (options.db) {
      return options.db
    }

    let dbPath: string
    if (options.dbPath) {
      dbPath = options.dbPath
    } else {
      dbPath = `${process.cwd()}/db/${chainName}/${network}/`
      if (options.bootstrapNode) {
        dbPath += `bootstrap`
      } else if (options.id != null && Number.isInteger(options.id)) {
        dbPath += `node_${options.id}`
      } else {
        dbPath += `node`
      }
    }

    verbose('using db at ', dbPath)
    if (!existsSync(dbPath)) {
      verbose('db does not exist, creating')
    }
    createDirectoryIfNotExists(dbPath)
    return levelup(leveldown(dbPath))
  }

  /**
   * Get all acknowledged tickets
   * @returns an array of all acknowledged tickets
   */
  public async getAcknowledgedTickets(): Promise<
    {
      ackTicket: Types.AcknowledgedTicket
      index: Uint8Array
    }[]
  > {
    const { AcknowledgedTicket } = this.paymentChannels.types
    const acknowledgedTicketSize = AcknowledgedTicket.SIZE(this.paymentChannels)
    let promises: {
      ackTicket: Types.AcknowledgedTicket
      index: Uint8Array
    }[] = []

    return new Promise((resolve, reject) => {
      this.db
        .createReadStream({
          gte: Buffer.from(this._dbKeys.AcknowledgedTickets(new Uint8Array(0x00)))
        })
        .on('error', (err) => reject(err))
        .on('data', ({ key, value }: { key: Buffer; value: Buffer }) => {
          if (value.buffer.byteLength !== acknowledgedTicketSize) return

          const index = this._dbKeys.AcknowledgedTicketsParse(key)
          const ackTicket = AcknowledgedTicket.create(this.paymentChannels, {
            bytes: value.buffer,
            offset: value.byteOffset
          })

          promises.push({
            ackTicket,
            index
          })
        })
        .on('end', () => resolve(Promise.all(promises)))
    })
  }

  /**
   * Update Acknowledged Ticket in database
   * @param ackTicket Uint8Array
   * @param index Uint8Array
   */
  public async updateAcknowledgedTicket(ackTicket: Types.AcknowledgedTicket, index: Uint8Array): Promise<void> {
    await this.db.put(Buffer.from(this._dbKeys.AcknowledgedTickets(index)), Buffer.from(ackTicket))
  }

  /**
   * Delete Acknowledged Ticket in database
   * @param index Uint8Array
   */
  public async deleteAcknowledgedTicket(index: Uint8Array): Promise<void> {
    await this.db.del(Buffer.from(this._dbKeys.AcknowledgedTickets(index)))
  }

  /**
   * Submit Acknowledged Ticket and update database
   * @param ackTicket Uint8Array
   * @param index Uint8Array
   */
  public async submitAcknowledgedTicket(
    ackTicket: Types.AcknowledgedTicket,
    index: Uint8Array
  ): Promise<
    | {
        status: 'SUCCESS'
        receipt: string
      }
    | {
        status: 'FAILURE'
        message: string
      }
    | {
        status: 'ERROR'
        error: Error | string
      }
  > {
    try {
      const result = await this.paymentChannels.channel.tickets.submit(ackTicket, index)

      if (result.status === 'SUCCESS') {
        ackTicket.redeemed = true
        await this.updateAcknowledgedTicket(ackTicket, index)
      } else if (result.status === 'FAILURE') {
        await this.deleteAcknowledgedTicket(index)
      } else if (result.status === 'ERROR') {
        await this.deleteAcknowledgedTicket(index)
        // @TODO: better handle this
      }

      return result
    } catch (err) {
      return {
        status: 'ERROR',
        error: err
      }
    }
  }
}

export { Hopr as default, LibP2P }
