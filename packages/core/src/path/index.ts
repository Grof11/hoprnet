import Heap from 'heap-js'
import { NETWORK_QUALITY_THRESHOLD, MAX_PATH_ITERATIONS } from '../constants'
import Debug from 'debug'
import type { ChannelEntry, PublicKey } from '@hoprnet/hopr-utils'
import { PATH_RANDOMNESS } from '../constants'

import BN from 'bn.js'
const log = Debug('hopr-core:pathfinder')

export type Path = PublicKey[]
type ChannelPath = ChannelEntry[]

const sum = (a: BN, b: BN) => a.add(b)
const pathFrom = (c: ChannelPath): Path => c.map((ce) => ce.destination) // Doesn't include ourself [0]
const filterCycles = (c: ChannelEntry, p: ChannelPath): boolean => !pathFrom(p).find((x) => x.eq(c.destination))
const rand = () => Math.random() // TODO - swap for something crypto safe
const debugPath = (p: ChannelPath) =>
  pathFrom(p)
    .map((x) => x.toString())
    .join(',')


// Weight a node based on stake, and a random component.
const defaultWeight = (edge: ChannelEntry): BN => {
  // Minimum is 'stake', therefore weight is monotonically increasing
  const r = 1 + rand() * PATH_RANDOMNESS 
  // Log scale, but minimum 1 weight per edge
  return edge.balance.toBN().addn(1).muln(r) //log()
}


/**
 * Find a path through the payment channels.
 *
 * @returns path as Array<PeerId> (including start, but not including
 * destination
 */
export async function findPath(
  start: PublicKey,
  destination: PublicKey,
  hops: number,
  networkQualityOf: (p: PublicKey) => number,
  getOpenChannelsFromPeer: (p: PublicKey) => Promise<ChannelEntry[]>,
  weight=defaultWeight
): Promise<Path> {
  log('find path from', start.toString(), 'to ', destination.toString(), 'length', hops)


  const compareWeight = (a: ChannelEntry, b: ChannelEntry) => (weight(b).gte(weight(a)) ? 1 : -1)

  // Weight the path with the sum of its' edges weight
  const pathWeight = (a: ChannelPath): BN => a.map(weight).reduce(sum, new BN(0))

  const comparePath = (a: ChannelPath, b: ChannelPath): number => {
    return pathWeight(b).gte(pathWeight(a)) ? 1 : -1
  }

  let queue = new Heap<ChannelPath>(comparePath)
  let deadEnds = new Set<string>()
  let iterations = 0
  queue.addAll((await getOpenChannelsFromPeer(start)).map((x) => [x]))

  while (queue.length > 0 && iterations++ < MAX_PATH_ITERATIONS) {
    const currentPath = queue.peek()
    if (pathFrom(currentPath).length == hops) {
      log('Path of correct length found', debugPath(currentPath), ':', pathWeight(currentPath).toString())
      return pathFrom(currentPath)
    }

    const lastPeer = currentPath[currentPath.length - 1].destination
    const newChannels = (await getOpenChannelsFromPeer(lastPeer))
      .filter((c) => {
        return (
          !destination.eq(c.destination) &&
          networkQualityOf(c.destination) > NETWORK_QUALITY_THRESHOLD &&
          filterCycles(c, currentPath) &&
          !deadEnds.has(c.destination.toHex())
        )
      })
      .sort(compareWeight)

    if (newChannels.length == 0) {
      queue.pop()
      deadEnds.add(lastPeer.toHex())
    } else {
      const toPush = Array.from(currentPath)
      toPush.push(newChannels[0])
      queue.push(toPush)
    }
  }

  log('Path not found')
  throw new Error('Path not found')
}
