/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Attack, AttackInterface } from "../Attack";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract CoinFlip",
        name: "_coinflip",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "flip",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040527f800000000000000000000000000000000000000000000000000000000000000060015534801561003457600080fd5b5060405161049e38038061049e833981810160405281019061005691906100b2565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610136565b6000815190506100ac8161011f565b92915050565b6000602082840312156100c457600080fd5b60006100d28482850161009d565b91505092915050565b60006100e6826100ff565b9050919050565b60006100f8826100db565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610128816100ed565b811461013357600080fd5b50565b610359806101456000396000f3fe608060405234801561001057600080fd5b5060043610610048576000357c010000000000000000000000000000000000000000000000000000000090048063cde4efa91461004d575b600080fd5b61005561006b565b6040516100629190610218565b60405180910390f35b60008061008260014361019f90919063ffffffff16565b4060019004905080600054141561009857600080fd5b8060008190555060006100b6600154836101b590919063ffffffff16565b90506000600182146100c95760006100cc565b60015b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631d263f67826040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016101459190610218565b602060405180830381600087803b15801561015f57600080fd5b505af1158015610173573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019791906101e0565b935050505090565b600081836101ad9190610264565b905092915050565b600081836101c39190610233565b905092915050565b6000815190506101da8161030c565b92915050565b6000602082840312156101f257600080fd5b6000610200848285016101cb565b91505092915050565b61021281610298565b82525050565b600060208201905061022d6000830184610209565b92915050565b600061023e826102a4565b9150610249836102a4565b925082610259576102586102dd565b5b828204905092915050565b600061026f826102a4565b915061027a836102a4565b92508282101561028d5761028c6102ae565b5b828203905092915050565b60008115159050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b61031581610298565b811461032057600080fd5b5056fea2646970667358221220dcd731bf0bd4c1f7143d5b3da63c0135e5e5ab1eb293feebd1634ab714a8f3e664736f6c63430008000033";

type AttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Attack__factory extends ContractFactory {
  constructor(...args: AttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Attack";
  }

  deploy(
    _coinflip: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Attack> {
    return super.deploy(_coinflip, overrides || {}) as Promise<Attack>;
  }
  getDeployTransaction(
    _coinflip: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_coinflip, overrides || {});
  }
  attach(address: string): Attack {
    return super.attach(address) as Attack;
  }
  connect(signer: Signer): Attack__factory {
    return super.connect(signer) as Attack__factory;
  }
  static readonly contractName: "Attack";
  public readonly contractName: "Attack";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttackInterface {
    return new utils.Interface(_abi) as AttackInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Attack {
    return new Contract(address, _abi, signerOrProvider) as Attack;
  }
}
