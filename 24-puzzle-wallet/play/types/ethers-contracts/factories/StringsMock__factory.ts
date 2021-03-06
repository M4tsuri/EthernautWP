/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StringsMock, StringsMockInterface } from "../StringsMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "fromUint256",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061024f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a2bd364414610030575b600080fd5b61005c6004803603602081101561004657600080fd5b81019080803590602001909291905050506100d7565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009c578082015181840152602081019050610081565b50505050905090810190601f1680156100c95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60606100e2826100e9565b9050919050565b60606000821415610131576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610214565b600082905060005b6000821461015b578080600101915050600a828161015357fe5b049150610139565b6060816040519080825280601f01601f1916602001820160405280156101905781602001600182028038833980820191505090505b50905060006001830390508593505b6000841461020c57600a84816101b157fe5b0660300160f81b828280600190039350815181106101cb57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a848161020457fe5b04935061019f565b819450505050505b91905056fea26469706673582212202c0bcec27c3d2a32a90c53de61ce0171d916b3654f56101d65a3c26ea192c73d64736f6c63430006020033";

type StringsMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StringsMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StringsMock__factory extends ContractFactory {
  constructor(...args: StringsMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "StringsMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StringsMock> {
    return super.deploy(overrides || {}) as Promise<StringsMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StringsMock {
    return super.attach(address) as StringsMock;
  }
  connect(signer: Signer): StringsMock__factory {
    return super.connect(signer) as StringsMock__factory;
  }
  static readonly contractName: "StringsMock";
  public readonly contractName: "StringsMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StringsMockInterface {
    return new utils.Interface(_abi) as StringsMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StringsMock {
    return new Contract(address, _abi, signerOrProvider) as StringsMock;
  }
}
