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

export class MintableToken extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): MintableToken;
  methods: {
    mintingFinished(): TransactionObject<boolean>;

    approve(
      _spender: string,
      _value: number | string
    ): TransactionObject<boolean>;

    totalSupply(): TransactionObject<string>;

    transferFrom(
      _from: string,
      _to: string,
      _value: number | string
    ): TransactionObject<boolean>;

    mint(_to: string, _amount: number | string): TransactionObject<boolean>;

    decreaseApproval(
      _spender: string,
      _subtractedValue: number | string
    ): TransactionObject<boolean>;

    balanceOf(_owner: string): TransactionObject<string>;

    renounceOwnership(): TransactionObject<void>;

    finishMinting(): TransactionObject<boolean>;

    owner(): TransactionObject<string>;

    transfer(_to: string, _value: number | string): TransactionObject<boolean>;

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
    Approval: ContractEvent<{
      owner: string;
      spender: string;
      value: string;
      0: string;
      1: string;
      2: string;
    }>;
    Transfer: ContractEvent<{
      from: string;
      to: string;
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
