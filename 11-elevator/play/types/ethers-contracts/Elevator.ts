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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ElevatorInterface extends utils.Interface {
  contractName: "Elevator";
  functions: {
    "floor()": FunctionFragment;
    "top()": FunctionFragment;
    "goTo(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "floor", values?: undefined): string;
  encodeFunctionData(functionFragment: "top", values?: undefined): string;
  encodeFunctionData(functionFragment: "goTo", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "floor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "top", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "goTo", data: BytesLike): Result;

  events: {};
}

export interface Elevator extends BaseContract {
  contractName: "Elevator";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ElevatorInterface;

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
    floor(overrides?: CallOverrides): Promise<[BigNumber]>;

    top(overrides?: CallOverrides): Promise<[boolean]>;

    goTo(
      _floor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  floor(overrides?: CallOverrides): Promise<BigNumber>;

  top(overrides?: CallOverrides): Promise<boolean>;

  goTo(
    _floor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    floor(overrides?: CallOverrides): Promise<BigNumber>;

    top(overrides?: CallOverrides): Promise<boolean>;

    goTo(_floor: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    floor(overrides?: CallOverrides): Promise<BigNumber>;

    top(overrides?: CallOverrides): Promise<BigNumber>;

    goTo(
      _floor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    floor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    top(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    goTo(
      _floor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}