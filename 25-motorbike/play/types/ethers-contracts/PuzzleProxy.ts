/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface PuzzleProxyInterface extends utils.Interface {
  contractName: "PuzzleProxy";
  functions: {
    "admin()": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "proposeNewAdmin(address)": FunctionFragment;
    "approveNewAdmin(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposeNewAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approveNewAdmin",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeNewAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveNewAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;

  events: {
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export type UpgradedEvent = TypedEvent<[string], { implementation: string }>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface PuzzleProxy extends BaseContract {
  contractName: "PuzzleProxy";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PuzzleProxyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    admin(overrides?: CallOverrides): Promise<[string]>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    proposeNewAdmin(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveNewAdmin(
      _expectedAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      _newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  proposeNewAdmin(
    _newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveNewAdmin(
    _expectedAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    _newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    proposeNewAdmin(
      _newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    approveNewAdmin(
      _expectedAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      _newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    proposeNewAdmin(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveNewAdmin(
      _expectedAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      _newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeNewAdmin(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveNewAdmin(
      _expectedAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      _newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
