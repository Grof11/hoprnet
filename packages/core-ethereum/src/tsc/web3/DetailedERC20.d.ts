/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js'
import { Contract, ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import { ContractEvent, Callback, TransactionObject, BlockType } from './types'

interface EventOptions {
  filter?: object
  fromBlock?: BlockType
  topics?: string[]
}

export class DetailedERC20 extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: ContractOptions)
  clone(): DetailedERC20
  methods: {
    name(): TransactionObject<string>

    approve(_spender: string, _value: number | string): TransactionObject<boolean>

    totalSupply(): TransactionObject<string>

    transferFrom(_from: string, _to: string, _value: number | string): TransactionObject<boolean>

    decimals(): TransactionObject<string>

    balanceOf(_who: string): TransactionObject<string>

    symbol(): TransactionObject<string>

    transfer(_to: string, _value: number | string): TransactionObject<boolean>

    allowance(_owner: string, _spender: string): TransactionObject<string>
  }
  events: {
    Approval: ContractEvent<{
      owner: string
      spender: string
      value: string
      0: string
      1: string
      2: string
    }>
    Transfer: ContractEvent<{
      from: string
      to: string
      value: string
      0: string
      1: string
      2: string
    }>
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
  }
}
