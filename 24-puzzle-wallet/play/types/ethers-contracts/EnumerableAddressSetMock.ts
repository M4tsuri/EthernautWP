/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface EnumerableAddressSetMockInterface extends utils.Interface {
  contractName: "EnumerableAddressSetMock";
  functions: {
    "contains(address)": FunctionFragment;
    "add(address)": FunctionFragment;
    "remove(address)": FunctionFragment;
    "length()": FunctionFragment;
    "at(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "contains", values: [string]): string;
  encodeFunctionData(functionFragment: "add", values: [string]): string;
  encodeFunctionData(functionFragment: "remove", values: [string]): string;
  encodeFunctionData(functionFragment: "length", values?: undefined): string;
  encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;

  events: {
    "OperationResult(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OperationResult"): EventFragment;
}

export type OperationResultEvent = TypedEvent<[boolean], { result: boolean }>;

export type OperationResultEventFilter = TypedEventFilter<OperationResultEvent>;

export interface EnumerableAddressSetMock extends BaseContract {
  contractName: "EnumerableAddressSetMock";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EnumerableAddressSetMockInterface;

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
    contains(value: string, overrides?: CallOverrides): Promise<[boolean]>;

    add(
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remove(
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    length(overrides?: CallOverrides): Promise<[BigNumber]>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  contains(value: string, overrides?: CallOverrides): Promise<boolean>;

  add(
    value: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remove(
    value: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  length(overrides?: CallOverrides): Promise<BigNumber>;

  at(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    contains(value: string, overrides?: CallOverrides): Promise<boolean>;

    add(value: string, overrides?: CallOverrides): Promise<void>;

    remove(value: string, overrides?: CallOverrides): Promise<void>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OperationResult(bool)"(result?: null): OperationResultEventFilter;
    OperationResult(result?: null): OperationResultEventFilter;
  };

  estimateGas: {
    contains(value: string, overrides?: CallOverrides): Promise<BigNumber>;

    add(
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remove(
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    contains(
      value: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    add(
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remove(
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    length(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
