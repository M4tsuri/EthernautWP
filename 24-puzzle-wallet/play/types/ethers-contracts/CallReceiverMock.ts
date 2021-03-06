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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface CallReceiverMockInterface extends utils.Interface {
  contractName: "CallReceiverMock";
  functions: {
    "mockFunction()": FunctionFragment;
    "mockFunctionNonPayable()": FunctionFragment;
    "mockFunctionRevertsNoReason()": FunctionFragment;
    "mockFunctionRevertsReason()": FunctionFragment;
    "mockFunctionThrows()": FunctionFragment;
    "mockFunctionOutOfGas()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "mockFunction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockFunctionNonPayable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockFunctionRevertsNoReason",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockFunctionRevertsReason",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockFunctionThrows",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockFunctionOutOfGas",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "mockFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockFunctionNonPayable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockFunctionRevertsNoReason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockFunctionRevertsReason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockFunctionThrows",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockFunctionOutOfGas",
    data: BytesLike
  ): Result;

  events: {
    "MockFunctionCalled()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MockFunctionCalled"): EventFragment;
}

export type MockFunctionCalledEvent = TypedEvent<[], {}>;

export type MockFunctionCalledEventFilter =
  TypedEventFilter<MockFunctionCalledEvent>;

export interface CallReceiverMock extends BaseContract {
  contractName: "CallReceiverMock";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CallReceiverMockInterface;

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
    mockFunction(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mockFunctionNonPayable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mockFunctionRevertsNoReason(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mockFunctionRevertsReason(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mockFunctionThrows(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mockFunctionOutOfGas(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  mockFunction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mockFunctionNonPayable(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mockFunctionRevertsNoReason(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mockFunctionRevertsReason(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mockFunctionThrows(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mockFunctionOutOfGas(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    mockFunction(overrides?: CallOverrides): Promise<string>;

    mockFunctionNonPayable(overrides?: CallOverrides): Promise<string>;

    mockFunctionRevertsNoReason(overrides?: CallOverrides): Promise<void>;

    mockFunctionRevertsReason(overrides?: CallOverrides): Promise<void>;

    mockFunctionThrows(overrides?: CallOverrides): Promise<void>;

    mockFunctionOutOfGas(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "MockFunctionCalled()"(): MockFunctionCalledEventFilter;
    MockFunctionCalled(): MockFunctionCalledEventFilter;
  };

  estimateGas: {
    mockFunction(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mockFunctionNonPayable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mockFunctionRevertsNoReason(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mockFunctionRevertsReason(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mockFunctionThrows(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mockFunctionOutOfGas(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    mockFunction(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mockFunctionNonPayable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mockFunctionRevertsNoReason(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mockFunctionRevertsReason(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mockFunctionThrows(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mockFunctionOutOfGas(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
