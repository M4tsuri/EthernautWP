/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CountersImpl, CountersImplInterface } from "../CountersImpl";

const _abi = [
  {
    inputs: [],
    name: "current",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610228806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632baeceb7146100465780639fa6a6e314610050578063d09de08a1461006e575b600080fd5b61004e610078565b005b610058610084565b6040518082815260200191505060405180910390f35b610076610095565b005b61008260006100a1565b565b600061009060006100c4565b905090565b61009f60006100d2565b565b6100b9600182600001546100e890919063ffffffff16565b816000018190555050565b600081600001549050919050565b6001816000016000828254019250508190555050565b600061012a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610132565b905092915050565b60008383111582906101df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156101a4578082015181840152602081019050610189565b50505050905090810190601f1680156101d15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fea26469706673582212200a0910ad4cb62425b9b55cc60794e6399347f8c89cb7a1a72dd5f1e331495d0064736f6c63430006020033";

type CountersImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CountersImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CountersImpl__factory extends ContractFactory {
  constructor(...args: CountersImplConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CountersImpl";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CountersImpl> {
    return super.deploy(overrides || {}) as Promise<CountersImpl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CountersImpl {
    return super.attach(address) as CountersImpl;
  }
  connect(signer: Signer): CountersImpl__factory {
    return super.connect(signer) as CountersImpl__factory;
  }
  static readonly contractName: "CountersImpl";
  public readonly contractName: "CountersImpl";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CountersImplInterface {
    return new utils.Interface(_abi) as CountersImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CountersImpl {
    return new Contract(address, _abi, signerOrProvider) as CountersImpl;
  }
}