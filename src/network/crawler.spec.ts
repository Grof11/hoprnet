import assert from 'assert'
import PeerInfo from 'peer-info'
import PeerId from 'peer-id'

import libp2p = require('libp2p')
import TCP = require('libp2p-tcp')
import MPLEX = require('libp2p-mplex')
import SECIO = require('libp2p-secio')
import DHT = require('libp2p-kad-dht')

import Debug from 'debug'
import chalk from 'chalk'

import Hopr from '..'
import { HoprCoreConnectorInstance } from '@hoprnet/hopr-core-connector-interface'
import { Interactions } from '../interactions'
import { Crawler } from './crawler'

describe('test crawler', function() {
  async function generateNode(): Promise<Hopr<HoprCoreConnectorInstance>> {
    const node = (await libp2p.create({
      peerInfo: await PeerInfo.create(await PeerId.create({ keyType: 'secp256k1' })),
      modules: {
        transport: [TCP],
        streamMuxer: [MPLEX],
        connEncryption: [SECIO],
        dht: DHT
      }
    })) as Hopr<HoprCoreConnectorInstance>

    // @ts-ignore
    node.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0')

    await node.start()

    node.interactions = new Interactions(node)
    node.network = {
      crawler: new Crawler(node)
    }

    node.log = Debug(`${chalk.blue(node.peerInfo.id.toB58String())}: `)

    return (node as unknown) as Hopr<HoprCoreConnectorInstance>
  }

  it('should return the node', async function() {
    const [Alice, Bob, Chris, Dave, Eve] = await Promise.all([generateNode(), generateNode(), generateNode(), generateNode(), generateNode()])

    await assert.rejects(() => Alice.network.crawler.crawl(), Error(`Unable to find enough other nodes in the network.`))

    Alice.peerStore.put(Bob.peerInfo)

    await assert.rejects(() => Alice.network.crawler.crawl(), Error(`Unable to find enough other nodes in the network.`))

    Bob.peerStore.put(Chris.peerInfo)

    await assert.rejects(() => Alice.network.crawler.crawl(), Error(`Unable to find enough other nodes in the network.`))

    Chris.peerStore.put(Dave.peerInfo)

    await assert.doesNotReject(() => Alice.network.crawler.crawl(), `Should find enough nodes.`)

    Bob.peerStore.put(Alice.peerInfo)
    Dave.peerStore.put(Eve.peerInfo)

    await assert.doesNotReject(() => Bob.network.crawler.crawl(), `Should find enough nodes.`)

    await Promise.all([
      /* prettier-ignore */
      Alice.stop(),
      Bob.stop(),
      Chris.stop(),
      Dave.stop()
    ])
  })

  //   after(async function() {
  //     await Promise.all([Alice.stop(), Bob.stop(), Chris.stop(), Dave.stop()])
  //   })
})
