[@hoprnet/hopr-core](../README.md) / [Exports](../modules.md) / default

# Class: default

## Hierarchy

- `EventEmitter`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [environment](default.md#environment)
- [forward](default.md#forward)
- [heartbeat](default.md#heartbeat)
- [indexer](default.md#indexer)
- [libp2p](default.md#libp2p)
- [networkPeers](default.md#networkpeers)
- [pubKey](default.md#pubkey)
- [status](default.md#status)
- [stopPeriodicCheck](default.md#stopperiodiccheck)
- [strategy](default.md#strategy)
- [captureRejectionSymbol](default.md#capturerejectionsymbol)
- [captureRejections](default.md#capturerejections)
- [defaultMaxListeners](default.md#defaultmaxlisteners)
- [errorMonitor](default.md#errormonitor)

### Methods

- [addListener](default.md#addlistener)
- [addPeerToDHT](default.md#addpeertodht)
- [announce](default.md#announce)
- [closeChannel](default.md#closechannel)
- [connectionReport](default.md#connectionreport)
- [emit](default.md#emit)
- [emitOnConnector](default.md#emitonconnector)
- [eventNames](default.md#eventnames)
- [fundChannel](default.md#fundchannel)
- [getAllChannels](default.md#getallchannels)
- [getAllTickets](default.md#getalltickets)
- [getAnnouncedAddresses](default.md#getannouncedaddresses)
- [getBalance](default.md#getbalance)
- [getChannelStrategy](default.md#getchannelstrategy)
- [getChannelsFrom](default.md#getchannelsfrom)
- [getChannelsTo](default.md#getchannelsto)
- [getConnectedPeers](default.md#getconnectedpeers)
- [getEthereumAddress](default.md#getethereumaddress)
- [getId](default.md#getid)
- [getIntermediateNodes](default.md#getintermediatenodes)
- [getListeningAddresses](default.md#getlisteningaddresses)
- [getMaxListeners](default.md#getmaxlisteners)
- [getNativeBalance](default.md#getnativebalance)
- [getObservedAddresses](default.md#getobservedaddresses)
- [getPublicKeyOf](default.md#getpublickeyof)
- [getTicketStatistics](default.md#getticketstatistics)
- [getTickets](default.md#gettickets)
- [getVersion](default.md#getversion)
- [listenerCount](default.md#listenercount)
- [listeners](default.md#listeners)
- [maybeEmitFundsEmptyEvent](default.md#maybeemitfundsemptyevent)
- [maybeLogProfilingToGCloud](default.md#maybelogprofilingtogcloud)
- [off](default.md#off)
- [on](default.md#on)
- [onChannelWaitingForCommitment](default.md#onchannelwaitingforcommitment)
- [onOwnChannelUpdated](default.md#onownchannelupdated)
- [onPeerAnnouncement](default.md#onpeerannouncement)
- [once](default.md#once)
- [openChannel](default.md#openchannel)
- [ping](default.md#ping)
- [prependListener](default.md#prependlistener)
- [prependOnceListener](default.md#prependoncelistener)
- [rawListeners](default.md#rawlisteners)
- [redeemAllTickets](default.md#redeemalltickets)
- [redeemTicketsInChannel](default.md#redeemticketsinchannel)
- [removeAllListeners](default.md#removealllisteners)
- [removeListener](default.md#removelistener)
- [sendMessage](default.md#sendmessage)
- [setChannelStrategy](default.md#setchannelstrategy)
- [setMaxListeners](default.md#setmaxlisteners)
- [signMessage](default.md#signmessage)
- [smartContractInfo](default.md#smartcontractinfo)
- [start](default.md#start)
- [startPeriodicStrategyCheck](default.md#startperiodicstrategycheck)
- [stop](default.md#stop)
- [subscribeOnConnector](default.md#subscribeonconnector)
- [tickChannelStrategy](default.md#tickchannelstrategy)
- [waitForFunds](default.md#waitforfunds)
- [waitForRunning](default.md#waitforrunning)
- [withdraw](default.md#withdraw)
- [getEventListeners](default.md#geteventlisteners)
- [listenerCount](default.md#listenercount)
- [on](default.md#on)
- [once](default.md#once)

## Constructors

### constructor

• **new default**(`id`, `db`, `connector`, `options`, `publicNodesEmitter?`)

Create an uninitialized Hopr Node

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `PeerId` |
| `db` | `HoprDB` |
| `connector` | `default` |
| `options` | [`HoprOptions`](../modules.md#hoproptions) |
| `publicNodesEmitter` | `PublicNodesEmitter` |

#### Overrides

EventEmitter.constructor

#### Defined in

[packages/core/src/index.ts:165](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L165)

## Properties

### environment

• **environment**: [`ResolvedEnvironment`](../modules.md#resolvedenvironment)

#### Defined in

[packages/core/src/index.ts:153](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L153)

___

### forward

• `Private` **forward**: `PacketForwardInteraction`

#### Defined in

[packages/core/src/index.ts:149](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L149)

___

### heartbeat

• `Private` **heartbeat**: `default`

#### Defined in

[packages/core/src/index.ts:148](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L148)

___

### indexer

• **indexer**: `Indexer`

#### Defined in

[packages/core/src/index.ts:155](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L155)

___

### libp2p

• `Private` **libp2p**: `Libp2p`

#### Defined in

[packages/core/src/index.ts:150](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L150)

___

### networkPeers

• `Private` **networkPeers**: `NetworkPeers`

#### Defined in

[packages/core/src/index.ts:147](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L147)

___

### pubKey

• `Private` **pubKey**: `PublicKey`

#### Defined in

[packages/core/src/index.ts:151](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L151)

___

### status

• **status**: [`NodeStatus`](../modules.md#nodestatus) = `'UNINITIALIZED'`

#### Defined in

[packages/core/src/index.ts:143](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L143)

___

### stopPeriodicCheck

• `Private` **stopPeriodicCheck**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/core/src/index.ts:145](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L145)

___

### strategy

• `Private` **strategy**: `ChannelStrategy`

#### Defined in

[packages/core/src/index.ts:146](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L146)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](default.md#capturerejectionsymbol)

#### Inherited from

EventEmitter.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:273

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventEmitter.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:278

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:279

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](default.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

EventEmitter.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:272

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`default`](default.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`default`](default.md)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### addPeerToDHT

▸ `Private` **addPeerToDHT**(`peer`): `Promise`<`void`\>

Total hack.
Libp2p seems to miss a channel that passes discovered peers
to the DHT routing table.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `peer` | `PeerId` | peer to add to DHT routing table |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:424](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L424)

___

### announce

▸ `Private` **announce**(`announceRoutableAddress?`): `Promise`<`void`\>

Announces address of node on-chain to be reachable by other nodes.

**`dev`** Promise resolves before own announcement appears in the indexer

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `announceRoutableAddress` | `boolean` | `false` | publish routable address if true |

#### Returns

`Promise`<`void`\>

a Promise that resolves once announce transaction has been published

#### Defined in

[packages/core/src/index.ts:754](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L754)

___

### closeChannel

▸ **closeChannel**(`counterparty`): `Promise`<{ `receipt`: `string` ; `status`: `ChannelStatus`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `counterparty` | `PeerId` |

#### Returns

`Promise`<{ `receipt`: `string` ; `status`: `ChannelStatus`  }\>

#### Defined in

[packages/core/src/index.ts:920](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L920)

___

### connectionReport

▸ **connectionReport**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/core/src/index.ts:705](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L705)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:555

___

### emitOnConnector

▸ **emitOnConnector**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:719](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L719)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:614

___

### fundChannel

▸ **fundChannel**(`counterparty`, `myFund`, `counterpartyFund`): `Promise`<`void`\>

Fund a payment channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `counterparty` | `PeerId` | the counter party's peerId |
| `myFund` | `BN` | the amount to fund the channel in my favor HOPR(wei) |
| `counterpartyFund` | `BN` | the amount to fund the channel in counterparty's favor HOPR(wei) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:896](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L896)

___

### getAllChannels

▸ `Private` **getAllChannels**(): `Promise`<`ChannelEntry`[]\>

#### Returns

`Promise`<`ChannelEntry`[]\>

#### Defined in

[packages/core/src/index.ts:515](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L515)

___

### getAllTickets

▸ **getAllTickets**(): `Promise`<`Ticket`[]\>

#### Returns

`Promise`<`Ticket`[]\>

#### Defined in

[packages/core/src/index.ts:964](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L964)

___

### getAnnouncedAddresses

▸ **getAnnouncedAddresses**(`peer?`, `timeout?`): `Promise`<`Multiaddr`[]\>

List of addresses that is announced to other nodes

**`dev`** returned list can change at runtime

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `peer` | `PeerId` | `undefined` | peer to query for, default self |
| `timeout` | `number` | `5e3` | custom timeout for DHT query |

#### Returns

`Promise`<`Multiaddr`[]\>

#### Defined in

[packages/core/src/index.ts:555](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L555)

___

### getBalance

▸ **getBalance**(): `Promise`<`Balance`\>

#### Returns

`Promise`<`Balance`\>

#### Defined in

[packages/core/src/index.ts:836](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L836)

___

### getChannelStrategy

▸ **getChannelStrategy**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/index.ts:832](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L832)

___

### getChannelsFrom

▸ **getChannelsFrom**(`addr`): `Promise`<`ChannelEntry`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `Address` |

#### Returns

`Promise`<`ChannelEntry`[]\>

#### Defined in

[packages/core/src/index.ts:1011](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1011)

___

### getChannelsTo

▸ **getChannelsTo**(`addr`): `Promise`<`ChannelEntry`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `Address` |

#### Returns

`Promise`<`ChannelEntry`[]\>

#### Defined in

[packages/core/src/index.ts:1015](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1015)

___

### getConnectedPeers

▸ **getConnectedPeers**(): `PeerId`[]

#### Returns

`PeerId`[]

#### Defined in

[packages/core/src/index.ts:698](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L698)

___

### getEthereumAddress

▸ **getEthereumAddress**(): `Address`

#### Returns

`Address`

#### Defined in

[packages/core/src/index.ts:1030](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1030)

___

### getId

▸ **getId**(): `PeerId`

#### Returns

`PeerId`

#### Defined in

[packages/core/src/index.ts:545](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L545)

___

### getIntermediateNodes

▸ `Private` **getIntermediateNodes**(`destination`): `Promise`<`PublicKey`[]\>

Takes a destination and samples randomly intermediate nodes
that will relay that message before it reaches its destination.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | `PublicKey` | instance of peerInfo that contains the peerId of the destination |

#### Returns

`Promise`<`PublicKey`[]\>

#### Defined in

[packages/core/src/index.ts:1059](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1059)

___

### getListeningAddresses

▸ **getListeningAddresses**(): `Multiaddr`[]

List the addresses on which the node is listening

#### Returns

`Multiaddr`[]

#### Defined in

[packages/core/src/index.ts:581](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L581)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](default.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:471

___

### getNativeBalance

▸ **getNativeBalance**(): `Promise`<`NativeBalance`\>

#### Returns

`Promise`<`NativeBalance`\>

#### Defined in

[packages/core/src/index.ts:840](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L840)

___

### getObservedAddresses

▸ **getObservedAddresses**(`peer`): `Multiaddr`[]

Gets the observed addresses of a given peer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `peer` | `PeerId` | peer to query for |

#### Returns

`Multiaddr`[]

#### Defined in

[packages/core/src/index.ts:589](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L589)

___

### getPublicKeyOf

▸ **getPublicKeyOf**(`addr`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `Address` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[packages/core/src/index.ts:1019](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1019)

___

### getTicketStatistics

▸ **getTicketStatistics**(): `Promise`<{ `losing`: `number` ; `neglected`: `number` ; `pending`: `number` ; `redeemed`: `number` ; `redeemedValue`: `Balance` ; `rejected`: `number` ; `rejectedValue`: `Balance` ; `unredeemed`: `number` = ack.length; `unredeemedValue`: `Balance` ; `winProportion`: `number`  }\>

#### Returns

`Promise`<{ `losing`: `number` ; `neglected`: `number` ; `pending`: `number` ; `redeemed`: `number` ; `redeemedValue`: `Balance` ; `rejected`: `number` ; `rejectedValue`: `Balance` ; `unredeemed`: `number` = ack.length; `unredeemedValue`: `Balance` ; `winProportion`: `number`  }\>

#### Defined in

[packages/core/src/index.ts:979](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L979)

___

### getTickets

▸ **getTickets**(`peerId`): `Promise`<`Ticket`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerId` | `PeerId` |

#### Returns

`Promise`<`Ticket`[]\>

#### Defined in

[packages/core/src/index.ts:968](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L968)

___

### getVersion

▸ **getVersion**(): `any`

Returns the version of hopr-core.

#### Returns

`any`

#### Defined in

[packages/core/src/index.ts:522](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L522)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:561

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:484

___

### maybeEmitFundsEmptyEvent

▸ `Private` **maybeEmitFundsEmptyEvent**(`error`): `void`

If error provided is considered an out of funds error
- it will emit that the node is out of funds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `any` | error thrown by an ethereum transaction |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:375](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L375)

___

### maybeLogProfilingToGCloud

▸ `Private` **maybeLogProfilingToGCloud**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:333](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L333)

___

### off

▸ **off**(`eventName`, `listener`): [`default`](default.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`default`](default.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`eventName`, `listener`): [`default`](default.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`default`](default.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:330

___

### onChannelWaitingForCommitment

▸ `Private` **onChannelWaitingForCommitment**(`c`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `ChannelEntry` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:352](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L352)

___

### onOwnChannelUpdated

▸ `Private` **onOwnChannelUpdated**(`channel`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `ChannelEntry` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:364](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L364)

___

### onPeerAnnouncement

▸ `Private` **onPeerAnnouncement**(`peer`): `void`

Called whenever a peer is announced

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `peer` | `Object` | newly announced peer |
| `peer.id` | `PeerId` | - |
| `peer.multiaddrs` | `Multiaddr`[] | - |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:393](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L393)

___

### once

▸ **once**(`eventName`, `listener`): [`default`](default.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`default`](default.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:359

___

### openChannel

▸ **openChannel**(`counterparty`, `amountToFund`): `Promise`<{ `channelId`: `Hash` ; `receipt`: `string`  }\>

Open a payment channel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `counterparty` | `PeerId` | the counter party's peerId |
| `amountToFund` | `BN` | the amount to fund in HOPR(wei) |

#### Returns

`Promise`<{ `channelId`: `Hash` ; `receipt`: `string`  }\>

#### Defined in

[packages/core/src/index.ts:860](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L860)

___

### ping

▸ **ping**(`destination`): `Promise`<{ `info?`: `string` ; `latency`: `number`  }\>

Ping a node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | `PeerId` | PeerId of the node |

#### Returns

`Promise`<{ `info?`: `string` ; `latency`: `number`  }\>

latency

#### Defined in

[packages/core/src/index.ts:683](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L683)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`default`](default.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`default`](default.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:579

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`default`](default.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`default`](default.md)

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:595

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:514

___

### redeemAllTickets

▸ **redeemAllTickets**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:1000](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1000)

___

### redeemTicketsInChannel

▸ **redeemTicketsInChannel**(`peerId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerId` | `PeerId` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:1004](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1004)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`default`](default.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`default`](default.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:455

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`default`](default.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`default`](default.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:439

___

### sendMessage

▸ **sendMessage**(`msg`, `destination`, `intermediatePath?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `Uint8Array` | message to send |
| `destination` | `PeerId` | PeerId of the destination |
| `intermediatePath?` | `PublicKey`[] | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:598](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L598)

___

### setChannelStrategy

▸ **setChannelStrategy**(`strategy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `ChannelStrategy` |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:819](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L819)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`default`](default.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`default`](default.md)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:465

___

### signMessage

▸ **signMessage**(`message`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/core/src/index.ts:1026](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1026)

___

### smartContractInfo

▸ **smartContractInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `channelClosureSecs` | `number` |
| `hoprChannelsAddress` | `string` |
| `hoprTokenAddress` | `string` |
| `network` | `string` |

#### Defined in

[packages/core/src/index.ts:845](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L845)

___

### start

▸ **start**(): `Promise`<`void`\>

Start node

The node has a fairly complex lifecycle. This method should do all setup
required for a node to be functioning.

If the node is not funded, it will throw.

- Create a link to the ethereum blockchain
  - Finish indexing previous blocks [SLOW]
  - Find publicly accessible relays

- Start LibP2P and work out our network configuration.
  - Pass the list of relays from the indexer

- Wait for wallet to be funded with ETH [requires user interaction]

- Announce address, pubkey, and multiaddr on chain.

- Start heartbeat, automatic strategies, etc..

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:206](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L206)

___

### startPeriodicStrategyCheck

▸ **startPeriodicStrategyCheck**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:723](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L723)

___

### stop

▸ **stop**(): `Promise`<`void`\>

Shuts down the node and saves keys and peerBook in the database

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:529](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L529)

___

### subscribeOnConnector

▸ **subscribeOnConnector**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/core/src/index.ts:716](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L716)

___

### tickChannelStrategy

▸ `Private` **tickChannelStrategy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:442](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L442)

___

### waitForFunds

▸ **waitForFunds**(): `Promise`<`void`\>

This is a utility method to wait until the node is funded.
A backoff is implemented, if node has not been funded and
MAX_DELAY is reached, this function will reject.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:1074](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1074)

___

### waitForRunning

▸ **waitForRunning**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/index.ts:1106](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1106)

___

### withdraw

▸ **withdraw**(`currency`, `recipient`, `amount`): `Promise`<`string`\>

Withdraw on-chain assets to a given address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | ``"NATIVE"`` \| ``"HOPR"`` | either native currency or HOPR tokens |
| `recipient` | `string` | the account where the assets should be transferred to |
| `amount` | `string` | how many tokens to be transferred |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/core/src/index.ts:1041](https://github.com/hoprnet/hoprnet/blob/master/packages/core/src/index.ts#L1041)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:262

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:234

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:217

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:158
