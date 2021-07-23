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

export class HoprDistributor extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): HoprDistributor;
  methods: {
    MULTIPLIER(): TransactionObject<string>;

    addAllocations(
      accounts: string[],
      amounts: (number | string)[],
      scheduleName: string
    ): TransactionObject<void>;

    addSchedule(
      durations: (number | string)[],
      percents: (number | string)[],
      name: string
    ): TransactionObject<void>;

    allocations(
      arg0: string,
      arg1: string
    ): TransactionObject<{
      amount: string;
      claimed: string;
      lastClaim: string;
      revoked: boolean;
      0: string;
      1: string;
      2: string;
      3: boolean;
    }>;

    claim(scheduleName: string): TransactionObject<void>;

    claimFor(account: string, scheduleName: string): TransactionObject<void>;

    getClaimable(
      account: string,
      scheduleName: string
    ): TransactionObject<string>;

    getSchedule(
      name: string
    ): TransactionObject<{
      0: string[];
      1: string[];
    }>;

    maxMintAmount(): TransactionObject<string>;

    owner(): TransactionObject<string>;

    renounceOwnership(): TransactionObject<void>;

    revokeAccount(
      account: string,
      scheduleName: string
    ): TransactionObject<void>;

    startTime(): TransactionObject<string>;

    token(): TransactionObject<string>;

    totalMinted(): TransactionObject<string>;

    totalToBeMinted(): TransactionObject<string>;

    transferOwnership(newOwner: string): TransactionObject<void>;

    updateStartTime(_startTime: number | string): TransactionObject<void>;
  };
  events: {
    AllocationAdded: ContractEvent<{
      account: string;
      amount: string;
      scheduleName: string;
      0: string;
      1: string;
      2: string;
    }>;
    Claimed: ContractEvent<{
      account: string;
      amount: string;
      scheduleName: string;
      0: string;
      1: string;
      2: string;
    }>;
    OwnershipTransferred: ContractEvent<{
      previousOwner: string;
      newOwner: string;
      0: string;
      1: string;
    }>;
    ScheduleAdded: ContractEvent<{
      durations: string[];
      percents: string[];
      name: string;
      0: string[];
      1: string[];
      2: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
