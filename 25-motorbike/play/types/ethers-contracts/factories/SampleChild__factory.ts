/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SampleChild, SampleChildInterface } from "../SampleChild";

const _abi = [
  {
    inputs: [],
    name: "child",
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
    name: "father",
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
    name: "gramps",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isHuman",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mother",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_mother",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_gramps",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_father",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_child",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_gramps",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_father",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b8c806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638beaf7d7116100665780638beaf7d7146101e4578063ed7dfee3146102a9578063f62d1888146102c7578063fa39851f14610382578063fe4b84df146104055761009e565b80631c8aca3b146100a3578063237b5e96146100c15780634a6c9db6146100df5780636f2edbd2146101015780638129fc1c146101da575b600080fd5b6100ab610433565b6040518082815260200191505060405180910390f35b6100c9610439565b6040518082815260200191505060405180910390f35b6100e761043f565b604051808215151515815260200191505060405180910390f35b6101d86004803603608081101561011757600080fd5b81019080803590602001909291908035906020019064010000000081111561013e57600080fd5b82018360208201111561015057600080fd5b8035906020019184600183028401116401000000008311171561017257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919080359060200190929190505050610452565b005b6101e261056f565b005b6102a7600480360360408110156101fa57600080fd5b810190808035906020019064010000000081111561021757600080fd5b82018360208201111561022957600080fd5b8035906020019184600183028401116401000000008311171561024b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050610689565b005b6102b161079a565b6040518082815260200191505060405180910390f35b610380600480360360208110156102dd57600080fd5b81019080803590602001906401000000008111156102fa57600080fd5b82018360208201111561030c57600080fd5b8035906020019184600183028401116401000000008311171561032e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506107a0565b005b61038a6108bf565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103ca5780820151818401526020810190506103af565b50505050905090810190601f1680156103f75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104316004803603602081101561041b57600080fd5b810190808035906020019092919050505061095d565b005b60035481565b60045481565b600060029054906101000a900460ff1681565b600060019054906101000a900460ff16806104715750610470610a6c565b5b8061048857506000809054906101000a900460ff16155b6104dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b60008060019054906101000a900460ff16159050801561052d576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6105368561095d565b6105408484610689565b8160048190555080156105685760008060016101000a81548160ff0219169083151502179055505b5050505050565b600060019054906101000a900460ff168061058e575061058d610a6c565b5b806105a557506000809054906101000a900460ff16155b6105fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b60008060019054906101000a900460ff16159050801561064a576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6001600060026101000a81548160ff02191690831515021790555080156106865760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff16806106a857506106a7610a6c565b5b806106bf57506000809054906101000a900460ff16155b610714576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b60008060019054906101000a900460ff161590508015610764576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61076d836107a0565b8160038190555080156107955760008060016101000a81548160ff0219169083151502179055505b505050565b60015481565b600060019054906101000a900460ff16806107bf57506107be610a6c565b5b806107d657506000809054906101000a900460ff16155b61082b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b60008060019054906101000a900460ff16159050801561087b576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61088361056f565b8160029080519060200190610899929190610a83565b5080156108bb5760008060016101000a81548160ff0219169083151502179055505b5050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109555780601f1061092a57610100808354040283529160200191610955565b820191906000526020600020905b81548152906001019060200180831161093857829003601f168201915b505050505081565b600060019054906101000a900460ff168061097c575061097b610a6c565b5b8061099357506000809054906101000a900460ff16155b6109e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610b29602e913960400191505060405180910390fd5b60008060019054906101000a900460ff161590508015610a38576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610a4061056f565b816001819055508015610a685760008060016101000a81548160ff0219169083151502179055505b5050565b6000803090506000813b9050600081149250505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610ac457805160ff1916838001178555610af2565b82800160010185558215610af2579182015b82811115610af1578251825591602001919060010190610ad6565b5b509050610aff9190610b03565b5090565b610b2591905b80821115610b21576000816000905550600101610b09565b5090565b9056fe496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564a26469706673582212202109aefabc7751fb85f2c9ff03ff1bc1f9d6ad30a40c4764ce2c8157b545e8bb64736f6c63430006020033";

type SampleChildConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SampleChildConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SampleChild__factory extends ContractFactory {
  constructor(...args: SampleChildConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SampleChild";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SampleChild> {
    return super.deploy(overrides || {}) as Promise<SampleChild>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SampleChild {
    return super.attach(address) as SampleChild;
  }
  connect(signer: Signer): SampleChild__factory {
    return super.connect(signer) as SampleChild__factory;
  }
  static readonly contractName: "SampleChild";
  public readonly contractName: "SampleChild";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SampleChildInterface {
    return new utils.Interface(_abi) as SampleChildInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleChild {
    return new Contract(address, _abi, signerOrProvider) as SampleChild;
  }
}