/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { Contract, ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { ContractEvent, Callback, TransactionObject, BlockType } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class ERC677BridgeToken extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): ERC677BridgeToken;
  methods: {
    mintingFinished(): TransactionObject<boolean>;

    name(): TransactionObject<string>;

    approve(
      _spender: string,
      _value: number | string
    ): TransactionObject<boolean>;

    setBridgeContract(_bridgeContract: string): TransactionObject<void>;

    totalSupply(): TransactionObject<string>;

    transferFrom(
      _from: string,
      _to: string,
      _value: number | string
    ): TransactionObject<boolean>;

    decimals(): TransactionObject<string>;

    increaseAllowance(
      spender: string,
      addedValue: number | string
    ): TransactionObject<boolean>;

    transferAndCall(
      _to: string,
      _value: number | string,
      _data: string | number[]
    ): TransactionObject<boolean>;

    mint(_to: string, _amount: number | string): TransactionObject<boolean>;

    burn(_value: number | string): TransactionObject<void>;

    decreaseApproval(
      _spender: string,
      _subtractedValue: number | string
    ): TransactionObject<boolean>;

    claimTokens(_token: string, _to: string): TransactionObject<void>;

    balanceOf(_owner: string): TransactionObject<string>;

    renounceOwnership(): TransactionObject<void>;

    isBridge(_address: string): TransactionObject<boolean>;

    finishMinting(): TransactionObject<boolean>;

    getTokenInterfacesVersion(): TransactionObject<{
      major: string;
      minor: string;
      patch: string;
      0: string;
      1: string;
      2: string;
    }>;

    owner(): TransactionObject<string>;

    symbol(): TransactionObject<string>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string
    ): TransactionObject<boolean>;

    transfer(_to: string, _value: number | string): TransactionObject<boolean>;

    bridgeContract(): TransactionObject<string>;

    increaseApproval(
      _spender: string,
      _addedValue: number | string
    ): TransactionObject<boolean>;

    allowance(_owner: string, _spender: string): TransactionObject<string>;

    transferOwnership(_newOwner: string): TransactionObject<void>;
  };
  events: {
    Mint: ContractEvent<{
      to: string;
      amount: string;
      0: string;
      1: string;
    }>;
    MintFinished: ContractEvent<{}>;
    OwnershipRenounced: ContractEvent<string>;
    OwnershipTransferred: ContractEvent<{
      previousOwner: string;
      newOwner: string;
      0: string;
      1: string;
    }>;
    Burn: ContractEvent<{
      burner: string;
      value: string;
      0: string;
      1: string;
    }>;
    Transfer: ContractEvent<{
      from: string;
      to: string;
      value: string;
      data: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;
    Approval: ContractEvent<{
      owner: string;
      spender: string;
      value: string;
      0: string;
      1: string;
      2: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
