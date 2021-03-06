/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Telephone, TelephoneInterface } from "../Telephone";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "owner",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610214806100606000396000f3fe608060405234801561001057600080fd5b5060043610610053576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b14610058578063a6f9dae114610076575b600080fd5b610060610092565b60405161006d919061017a565b60405180910390f35b610090600480360381019061008b9190610142565b6100b6565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161461012a57806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b60008135905061013c816101c7565b92915050565b60006020828403121561015457600080fd5b60006101628482850161012d565b91505092915050565b61017481610195565b82525050565b600060208201905061018f600083018461016b565b92915050565b60006101a0826101a7565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6101d081610195565b81146101db57600080fd5b5056fea26469706673582212204767fc79c28452f3f9afe68ca92e7ec42337ca8b9c1427a20e98f265817fcd4064736f6c63430008000033";

type TelephoneConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TelephoneConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Telephone__factory extends ContractFactory {
  constructor(...args: TelephoneConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Telephone";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Telephone> {
    return super.deploy(overrides || {}) as Promise<Telephone>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Telephone {
    return super.attach(address) as Telephone;
  }
  connect(signer: Signer): Telephone__factory {
    return super.connect(signer) as Telephone__factory;
  }
  static readonly contractName: "Telephone";
  public readonly contractName: "Telephone";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TelephoneInterface {
    return new utils.Interface(_abi) as TelephoneInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Telephone {
    return new Contract(address, _abi, signerOrProvider) as Telephone;
  }
}
