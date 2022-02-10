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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AddressImplInterface extends utils.Interface {
  contractName: "AddressImpl";
  functions: {
    "isContract(address)": FunctionFragment;
    "sendValue(address,uint256)": FunctionFragment;
    "functionCall(address,bytes)": FunctionFragment;
    "functionCallWithValue(address,bytes,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "isContract", values: [string]): string;
  encodeFunctionData(
    functionFragment: "sendValue",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "functionCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "functionCallWithValue",
    values: [string, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "isContract", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "functionCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "functionCallWithValue",
    data: BytesLike
  ): Result;

  events: {
    "CallReturnValue(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CallReturnValue"): EventFragment;
}

export type CallReturnValueEvent = TypedEvent<[string], { data: string }>;

export type CallReturnValueEventFilter = TypedEventFilter<CallReturnValueEvent>;

export interface AddressImpl extends BaseContract {
  contractName: "AddressImpl";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AddressImplInterface;

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
    isContract(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    sendValue(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    functionCall(
      target: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    functionCallWithValue(
      target: string,
      data: BytesLike,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  isContract(account: string, overrides?: CallOverrides): Promise<boolean>;

  sendValue(
    receiver: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  functionCall(
    target: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  functionCallWithValue(
    target: string,
    data: BytesLike,
    value: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    isContract(account: string, overrides?: CallOverrides): Promise<boolean>;

    sendValue(
      receiver: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    functionCall(
      target: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    functionCallWithValue(
      target: string,
      data: BytesLike,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CallReturnValue(string)"(data?: null): CallReturnValueEventFilter;
    CallReturnValue(data?: null): CallReturnValueEventFilter;
  };

  estimateGas: {
    isContract(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    sendValue(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    functionCall(
      target: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    functionCallWithValue(
      target: string,
      data: BytesLike,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isContract(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendValue(
      receiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    functionCall(
      target: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    functionCallWithValue(
      target: string,
      data: BytesLike,
      value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}