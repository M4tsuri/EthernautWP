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

export interface GSNRecipientInterface extends utils.Interface {
  contractName: "GSNRecipient";
  functions: {
    "acceptRelayedCall(address,address,bytes,uint256,uint256,uint256,uint256,bytes,uint256)": FunctionFragment;
    "getHubAddr()": FunctionFragment;
    "relayHubVersion()": FunctionFragment;
    "preRelayedCall(bytes)": FunctionFragment;
    "postRelayedCall(bytes,bool,uint256,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptRelayedCall",
    values: [
      string,
      string,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getHubAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "relayHubVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "preRelayedCall",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "postRelayedCall",
    values: [BytesLike, boolean, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptRelayedCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHubAddr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "relayHubVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "preRelayedCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "postRelayedCall",
    data: BytesLike
  ): Result;

  events: {
    "RelayHubChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RelayHubChanged"): EventFragment;
}

export type RelayHubChangedEvent = TypedEvent<
  [string, string],
  { oldRelayHub: string; newRelayHub: string }
>;

export type RelayHubChangedEventFilter = TypedEventFilter<RelayHubChangedEvent>;

export interface GSNRecipient extends BaseContract {
  contractName: "GSNRecipient";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GSNRecipientInterface;

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
    /**
     * Called by {IRelayHub} to validate if this recipient accepts being charged for a relayed call. Note that the recipient will be charged regardless of the execution result of the relayed call (i.e. if it reverts or not).     * The relay request was originated by `from` and will be served by `relay`. `encodedFunction` is the relayed call calldata, so its first four bytes are the function selector. The relayed call will be forwarded `gasLimit` gas, and the transaction executed with a gas price of at least `gasPrice`. ``relay``'s fee is `transactionFee`, and the recipient will be charged at most `maxPossibleCharge` (in wei). `nonce` is the sender's (`from`) nonce for replay attack protection in {IRelayHub}, and `approvalData` is a optional parameter that can be used to hold a signature over all or some of the previous values.     * Returns a tuple, where the first value is used to indicate approval (0) or rejection (custom non-zero error code, values 1 to 10 are reserved) and the second one is data to be passed to the other {IRelayRecipient} functions.     * {acceptRelayedCall} is called with 50k gas: if it runs out during execution, the request will be considered rejected. A regular revert will also trigger a rejection.
     */
    acceptRelayedCall(
      relay: string,
      from: string,
      encodedFunction: BytesLike,
      transactionFee: BigNumberish,
      gasPrice: BigNumberish,
      gasLimit: BigNumberish,
      nonce: BigNumberish,
      approvalData: BytesLike,
      maxPossibleCharge: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    /**
     * Returns the address of the {IRelayHub} contract for this recipient.
     */
    getHubAddr(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the version string of the {IRelayHub} for which this recipient implementation was built. If {_upgradeRelayHub} is used, the new {IRelayHub} instance should be compatible with this version.
     */
    relayHubVersion(overrides?: CallOverrides): Promise<[string]>;

    /**
     * See `IRelayRecipient.preRelayedCall`.     * This function should not be overridden directly, use `_preRelayedCall` instead.     * * Requirements:     * - the caller must be the `RelayHub` contract.
     */
    preRelayedCall(
      context: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * See `IRelayRecipient.postRelayedCall`.     * This function should not be overridden directly, use `_postRelayedCall` instead.     * * Requirements:     * - the caller must be the `RelayHub` contract.
     */
    postRelayedCall(
      context: BytesLike,
      success: boolean,
      actualCharge: BigNumberish,
      preRetVal: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * Called by {IRelayHub} to validate if this recipient accepts being charged for a relayed call. Note that the recipient will be charged regardless of the execution result of the relayed call (i.e. if it reverts or not).     * The relay request was originated by `from` and will be served by `relay`. `encodedFunction` is the relayed call calldata, so its first four bytes are the function selector. The relayed call will be forwarded `gasLimit` gas, and the transaction executed with a gas price of at least `gasPrice`. ``relay``'s fee is `transactionFee`, and the recipient will be charged at most `maxPossibleCharge` (in wei). `nonce` is the sender's (`from`) nonce for replay attack protection in {IRelayHub}, and `approvalData` is a optional parameter that can be used to hold a signature over all or some of the previous values.     * Returns a tuple, where the first value is used to indicate approval (0) or rejection (custom non-zero error code, values 1 to 10 are reserved) and the second one is data to be passed to the other {IRelayRecipient} functions.     * {acceptRelayedCall} is called with 50k gas: if it runs out during execution, the request will be considered rejected. A regular revert will also trigger a rejection.
   */
  acceptRelayedCall(
    relay: string,
    from: string,
    encodedFunction: BytesLike,
    transactionFee: BigNumberish,
    gasPrice: BigNumberish,
    gasLimit: BigNumberish,
    nonce: BigNumberish,
    approvalData: BytesLike,
    maxPossibleCharge: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string]>;

  /**
   * Returns the address of the {IRelayHub} contract for this recipient.
   */
  getHubAddr(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the version string of the {IRelayHub} for which this recipient implementation was built. If {_upgradeRelayHub} is used, the new {IRelayHub} instance should be compatible with this version.
   */
  relayHubVersion(overrides?: CallOverrides): Promise<string>;

  /**
   * See `IRelayRecipient.preRelayedCall`.     * This function should not be overridden directly, use `_preRelayedCall` instead.     * * Requirements:     * - the caller must be the `RelayHub` contract.
   */
  preRelayedCall(
    context: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * See `IRelayRecipient.postRelayedCall`.     * This function should not be overridden directly, use `_postRelayedCall` instead.     * * Requirements:     * - the caller must be the `RelayHub` contract.
   */
  postRelayedCall(
    context: BytesLike,
    success: boolean,
    actualCharge: BigNumberish,
    preRetVal: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Called by {IRelayHub} to validate if this recipient accepts being charged for a relayed call. Note that the recipient will be charged regardless of the execution result of the relayed call (i.e. if it reverts or not).     * The relay request was originated by `from` and will be served by `relay`. `encodedFunction` is the relayed call calldata, so its first four bytes are the function selector. The relayed call will be forwarded `gasLimit` gas, and the transaction executed with a gas price of at least `gasPrice`. ``relay``'s fee is `transactionFee`, and the recipient will be charged at most `maxPossibleCharge` (in wei). `nonce` is the sender's (`from`) nonce for replay attack protection in {IRelayHub}, and `approvalData` is a optional parameter that can be used to hold a signature over all or some of the previous values.     * Returns a tuple, where the first value is used to indicate approval (0) or rejection (custom non-zero error code, values 1 to 10 are reserved) and the second one is data to be passed to the other {IRelayRecipient} functions.     * {acceptRelayedCall} is called with 50k gas: if it runs out during execution, the request will be considered rejected. A regular revert will also trigger a rejection.
     */
    acceptRelayedCall(
      relay: string,
      from: string,
      encodedFunction: BytesLike,
      transactionFee: BigNumberish,
      gasPrice: BigNumberish,
      gasLimit: BigNumberish,
      nonce: BigNumberish,
      approvalData: BytesLike,
      maxPossibleCharge: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    /**
     * Returns the address of the {IRelayHub} contract for this recipient.
     */
    getHubAddr(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the version string of the {IRelayHub} for which this recipient implementation was built. If {_upgradeRelayHub} is used, the new {IRelayHub} instance should be compatible with this version.
     */
    relayHubVersion(overrides?: CallOverrides): Promise<string>;

    /**
     * See `IRelayRecipient.preRelayedCall`.     * This function should not be overridden directly, use `_preRelayedCall` instead.     * * Requirements:     * - the caller must be the `RelayHub` contract.
     */
    preRelayedCall(
      context: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * See `IRelayRecipient.postRelayedCall`.     * This function should not be overridden directly, use `_postRelayedCall` instead.     * * Requirements:     * - the caller must be the `RelayHub` contract.
     */
    postRelayedCall(
      context: BytesLike,
      success: boolean,
      actualCharge: BigNumberish,
      preRetVal: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RelayHubChanged(address,address)"(
      oldRelayHub?: string | null,
      newRelayHub?: string | null
    ): RelayHubChangedEventFilter;
    RelayHubChanged(
      oldRelayHub?: string | null,
      newRelayHub?: string | null
    ): RelayHubChangedEventFilter;
  };

  estimateGas: {
    /**
     * Called by {IRelayHub} to validate if this recipient accepts being charged for a relayed call. Note that the recipient will be charged regardless of the execution result of the relayed call (i.e. if it reverts or not).     * The relay request was originated by `from` and will be served by `relay`. `encodedFunction` is the relayed call calldata, so its first four bytes are the function selector. The relayed call will be forwarded `gasLimit` gas, and the transaction executed with a gas price of at least `gasPrice`. ``relay``'s fee is `transactionFee`, and the recipient will be charged at most `maxPossibleCharge` (in wei). `nonce` is the sender's (`from`) nonce for replay attack protection in {IRelayHub}, and `approvalData` is a optional parameter that can be used to hold a signature over all or some of the previous values.     * Returns a tuple, where the first value is used to indicate approval (0) or rejection (custom non-zero error code, values 1 to 10 are reserved) and the second one is data to be passed to the other {IRelayRecipient} functions.     * {acceptRelayedCall} is called with 50k gas: if it runs out during execution, the request will be considered rejected. A regular revert will also trigger a rejection.
     */
    acceptRelayedCall(
      relay: string,
      from: string,
      encodedFunction: BytesLike,
      transactionFee: BigNumberish,
      gasPrice: BigNumberish,
      gasLimit: BigNumberish,
      nonce: BigNumberish,
      approvalData: BytesLike,
      maxPossibleCharge: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the address of the {IRelayHub} contract for this recipient.
     */
    getHubAddr(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the version string of the {IRelayHub} for which this recipient implementation was built. If {_upgradeRelayHub} is used, the new {IRelayHub} instance should be compatible with this version.
     */
    relayHubVersion(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See `IRelayRecipient.preRelayedCall`.     * This function should not be overridden directly, use `_preRelayedCall` instead.     * * Requirements:     * - the caller must be the `RelayHub` contract.
     */
    preRelayedCall(
      context: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * See `IRelayRecipient.postRelayedCall`.     * This function should not be overridden directly, use `_postRelayedCall` instead.     * * Requirements:     * - the caller must be the `RelayHub` contract.
     */
    postRelayedCall(
      context: BytesLike,
      success: boolean,
      actualCharge: BigNumberish,
      preRetVal: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Called by {IRelayHub} to validate if this recipient accepts being charged for a relayed call. Note that the recipient will be charged regardless of the execution result of the relayed call (i.e. if it reverts or not).     * The relay request was originated by `from` and will be served by `relay`. `encodedFunction` is the relayed call calldata, so its first four bytes are the function selector. The relayed call will be forwarded `gasLimit` gas, and the transaction executed with a gas price of at least `gasPrice`. ``relay``'s fee is `transactionFee`, and the recipient will be charged at most `maxPossibleCharge` (in wei). `nonce` is the sender's (`from`) nonce for replay attack protection in {IRelayHub}, and `approvalData` is a optional parameter that can be used to hold a signature over all or some of the previous values.     * Returns a tuple, where the first value is used to indicate approval (0) or rejection (custom non-zero error code, values 1 to 10 are reserved) and the second one is data to be passed to the other {IRelayRecipient} functions.     * {acceptRelayedCall} is called with 50k gas: if it runs out during execution, the request will be considered rejected. A regular revert will also trigger a rejection.
     */
    acceptRelayedCall(
      relay: string,
      from: string,
      encodedFunction: BytesLike,
      transactionFee: BigNumberish,
      gasPrice: BigNumberish,
      gasLimit: BigNumberish,
      nonce: BigNumberish,
      approvalData: BytesLike,
      maxPossibleCharge: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the {IRelayHub} contract for this recipient.
     */
    getHubAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the version string of the {IRelayHub} for which this recipient implementation was built. If {_upgradeRelayHub} is used, the new {IRelayHub} instance should be compatible with this version.
     */
    relayHubVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See `IRelayRecipient.preRelayedCall`.     * This function should not be overridden directly, use `_preRelayedCall` instead.     * * Requirements:     * - the caller must be the `RelayHub` contract.
     */
    preRelayedCall(
      context: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See `IRelayRecipient.postRelayedCall`.     * This function should not be overridden directly, use `_postRelayedCall` instead.     * * Requirements:     * - the caller must be the `RelayHub` contract.
     */
    postRelayedCall(
      context: BytesLike,
      success: boolean,
      actualCharge: BigNumberish,
      preRetVal: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
