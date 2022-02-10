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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TokenTimelockInterface extends utils.Interface {
  contractName: "TokenTimelock";
  functions: {
    "token()": FunctionFragment;
    "beneficiary()": FunctionFragment;
    "releaseTime()": FunctionFragment;
    "release()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "releaseTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "release", values?: undefined): string;

  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;

  events: {};
}

export interface TokenTimelock extends BaseContract {
  contractName: "TokenTimelock";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenTimelockInterface;

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
    token(overrides?: CallOverrides): Promise<[string]>;

    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    releaseTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    release(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  token(overrides?: CallOverrides): Promise<string>;

  beneficiary(overrides?: CallOverrides): Promise<string>;

  releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Transfers tokens held by timelock to beneficiary.
   */
  release(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    token(overrides?: CallOverrides): Promise<string>;

    beneficiary(overrides?: CallOverrides): Promise<string>;

    releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    release(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    token(overrides?: CallOverrides): Promise<BigNumber>;

    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    releaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    release(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    releaseTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Transfers tokens held by timelock to beneficiary.
     */
    release(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
