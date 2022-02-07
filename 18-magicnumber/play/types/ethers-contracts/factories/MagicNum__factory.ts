/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MagicNum, MagicNumInterface } from "../MagicNum";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "solver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_solver",
        type: "address",
      },
    ],
    name: "setSolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101e0806100206000396000f3fe608060405234801561001057600080fd5b5060043610610053576000357c0100000000000000000000000000000000000000000000000000000000900480631f8794331461005857806349a7a26d14610074575b600080fd5b610072600480360381019061006d919061010e565b610092565b005b61007c6100d5565b6040516100899190610146565b60405180910390f35b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008135905061010881610193565b92915050565b60006020828403121561012057600080fd5b600061012e848285016100f9565b91505092915050565b61014081610161565b82525050565b600060208201905061015b6000830184610137565b92915050565b600061016c82610173565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b61019c81610161565b81146101a757600080fd5b5056fea2646970667358221220de0acfe9b2f41e3bfb06c57da510bc060ed18dd3819c2c445d81bcaf5df37b1064736f6c63430008000033";

type MagicNumConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MagicNumConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MagicNum__factory extends ContractFactory {
  constructor(...args: MagicNumConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MagicNum";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MagicNum> {
    return super.deploy(overrides || {}) as Promise<MagicNum>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MagicNum {
    return super.attach(address) as MagicNum;
  }
  connect(signer: Signer): MagicNum__factory {
    return super.connect(signer) as MagicNum__factory;
  }
  static readonly contractName: "MagicNum";
  public readonly contractName: "MagicNum";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MagicNumInterface {
    return new utils.Interface(_abi) as MagicNumInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MagicNum {
    return new Contract(address, _abi, signerOrProvider) as MagicNum;
  }
}
