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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface DummyImplementationInterface extends utils.Interface {
  contractName: "DummyImplementation";
  functions: {
    "text()": FunctionFragment;
    "value()": FunctionFragment;
    "values(uint256)": FunctionFragment;
    "initializeNonPayable()": FunctionFragment;
    "initializePayable(uint256)": FunctionFragment;
    "initialize(uint256,string,uint256[])": FunctionFragment;
    "get()": FunctionFragment;
    "version()": FunctionFragment;
    "reverts()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "text", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "values",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeNonPayable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializePayable",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, string, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "get", values?: undefined): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "reverts", values?: undefined): string;

  decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeNonPayable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePayable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reverts", data: BytesLike): Result;

  events: {};
}

export interface DummyImplementation extends BaseContract {
  contractName: "DummyImplementation";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DummyImplementationInterface;

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
    text(overrides?: CallOverrides): Promise<[string]>;

    value(overrides?: CallOverrides): Promise<[BigNumber]>;

    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    "initializeNonPayable()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initializeNonPayable(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initializePayable(uint256)"(
      _value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initializePayable()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    get(overrides?: CallOverrides): Promise<[boolean]>;

    version(overrides?: CallOverrides): Promise<[string]>;

    reverts(overrides?: CallOverrides): Promise<[void]>;
  };

  text(overrides?: CallOverrides): Promise<string>;

  value(overrides?: CallOverrides): Promise<BigNumber>;

  values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "initializeNonPayable()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initializeNonPayable(uint256)"(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initializePayable(uint256)"(
    _value: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initializePayable()"(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _value: BigNumberish,
    _text: string,
    _values: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  get(overrides?: CallOverrides): Promise<boolean>;

  version(overrides?: CallOverrides): Promise<string>;

  reverts(overrides?: CallOverrides): Promise<void>;

  callStatic: {
    text(overrides?: CallOverrides): Promise<string>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "initializeNonPayable()"(overrides?: CallOverrides): Promise<void>;

    "initializeNonPayable(uint256)"(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initializePayable(uint256)"(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initializePayable()"(overrides?: CallOverrides): Promise<void>;

    initialize(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    get(overrides?: CallOverrides): Promise<boolean>;

    version(overrides?: CallOverrides): Promise<string>;

    reverts(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    text(overrides?: CallOverrides): Promise<BigNumber>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "initializeNonPayable()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initializeNonPayable(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initializePayable(uint256)"(
      _value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initializePayable()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    get(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    reverts(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    text(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    value(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    values(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "initializeNonPayable()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initializeNonPayable(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initializePayable(uint256)"(
      _value: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initializePayable()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    get(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reverts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
