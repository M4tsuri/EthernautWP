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

export interface DexTwoInterface extends utils.Interface {
  contractName: "DexTwo";
  functions: {
    "token1()": FunctionFragment;
    "token2()": FunctionFragment;
    "swap(address,address,uint256)": FunctionFragment;
    "add_liquidity(address,uint256)": FunctionFragment;
    "get_swap_amount(address,address,uint256)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(functionFragment: "token2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "add_liquidity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_swap_amount",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "add_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_swap_amount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;

  events: {};
}

export interface DexTwo extends BaseContract {
  contractName: "DexTwo";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DexTwoInterface;

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
    token1(overrides?: CallOverrides): Promise<[string]>;

    token2(overrides?: CallOverrides): Promise<[string]>;

    swap(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    add_liquidity(
      token_address: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    get_swap_amount(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  token1(overrides?: CallOverrides): Promise<string>;

  token2(overrides?: CallOverrides): Promise<string>;

  swap(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  add_liquidity(
    token_address: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  get_swap_amount(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    token1(overrides?: CallOverrides): Promise<string>;

    token2(overrides?: CallOverrides): Promise<string>;

    swap(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    add_liquidity(
      token_address: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    get_swap_amount(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    token1(overrides?: CallOverrides): Promise<BigNumber>;

    token2(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    add_liquidity(
      token_address: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    get_swap_amount(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swap(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    add_liquidity(
      token_address: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    get_swap_amount(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
