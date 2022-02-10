/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Engine, EngineInterface } from "../Engine";

const _abi = [
  {
    inputs: [],
    name: "horsePower",
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
    name: "upgrader",
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
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506109d4806100206000396000f3fe60806040526004361061003f5760003560e01c80634f1ef28614610044578063564f6d71146100605780638129fc1c1461008b578063af269745146100a2575b600080fd5b61005e60048036038101906100599190610646565b6100cd565b005b34801561006c57600080fd5b506100756100e3565b60405161008291906106bb565b60405180910390f35b34801561009757600080fd5b506100a06100e9565b005b3480156100ae57600080fd5b506100b7610217565b6040516100c491906106e5565b60405180910390f35b6100d561023d565b6100df82826102cf565b5050565b60015481565b600060019054906101000a900460ff166101115760008054906101000a900460ff161561011a565b610119610393565b5b610159576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015090610783565b60405180910390fd5b60008060019054906101000a900460ff1615905080156101a9576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6103e860018190555033600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156102145760008060016101000a81548160ff0219169083151502179055505b50565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c4906107ef565b60405180910390fd5b565b6102d8826103a4565b60008151111561038f5760008273ffffffffffffffffffffffffffffffffffffffff16826040516103099190610889565b600060405180830381855af49150503d8060008114610344576040519150601f19603f3d011682016040523d82523d6000602084013e610349565b606091505b505090508061038d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610384906108ec565b60405180910390fd5b505b5050565b600061039e30610458565b15905090565b6103ad8161047b565b6103ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e39061097e565b60405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080823b905060008111915050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104cd826104a2565b9050919050565b6104dd816104c2565b81146104e857600080fd5b50565b6000813590506104fa816104d4565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6105538261050a565b810181811067ffffffffffffffff821117156105725761057161051b565b5b80604052505050565b600061058561048e565b9050610591828261054a565b919050565b600067ffffffffffffffff8211156105b1576105b061051b565b5b6105ba8261050a565b9050602081019050919050565b82818337600083830152505050565b60006105e96105e484610596565b61057b565b90508281526020810184848401111561060557610604610505565b5b6106108482856105c7565b509392505050565b600082601f83011261062d5761062c610500565b5b813561063d8482602086016105d6565b91505092915050565b6000806040838503121561065d5761065c610498565b5b600061066b858286016104eb565b925050602083013567ffffffffffffffff81111561068c5761068b61049d565b5b61069885828601610618565b9150509250929050565b6000819050919050565b6106b5816106a2565b82525050565b60006020820190506106d060008301846106ac565b92915050565b6106df816104c2565b82525050565b60006020820190506106fa60008301846106d6565b92915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b600061076d602e83610700565b915061077882610711565b604082019050919050565b6000602082019050818103600083015261079c81610760565b9050919050565b7f43616e2774207570677261646500000000000000000000000000000000000000600082015250565b60006107d9600d83610700565b91506107e4826107a3565b602082019050919050565b60006020820190508181036000830152610808816107cc565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015610843578082015181840152602081019050610828565b83811115610852576000848401525b50505050565b60006108638261080f565b61086d818561081a565b935061087d818560208601610825565b80840191505092915050565b60006108958284610858565b915081905092915050565b7f43616c6c206661696c6564000000000000000000000000000000000000000000600082015250565b60006108d6600b83610700565b91506108e1826108a0565b602082019050919050565b60006020820190508181036000830152610905816108c9565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000610968602d83610700565b91506109738261090c565b604082019050919050565b600060208201905081810360008301526109978161095b565b905091905056fea2646970667358221220464f21c74911e1292097fe78b7ab5b49e67cc3cb7ecc982cc8e5a7ce49109e0664736f6c634300080b0033";

type EngineConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EngineConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Engine__factory extends ContractFactory {
  constructor(...args: EngineConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Engine";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Engine> {
    return super.deploy(overrides || {}) as Promise<Engine>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Engine {
    return super.attach(address) as Engine;
  }
  connect(signer: Signer): Engine__factory {
    return super.connect(signer) as Engine__factory;
  }
  static readonly contractName: "Engine";
  public readonly contractName: "Engine";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EngineInterface {
    return new utils.Interface(_abi) as EngineInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Engine {
    return new Contract(address, _abi, signerOrProvider) as Engine;
  }
}
