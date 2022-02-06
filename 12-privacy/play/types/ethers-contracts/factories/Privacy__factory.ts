/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BytesLike,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Privacy, PrivacyInterface } from "../Privacy";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[3]",
        name: "_data",
        type: "bytes32[3]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ID",
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
    name: "locked",
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
    inputs: [
      {
        internalType: "bytes16",
        name: "_key",
        type: "bytes16",
      },
    ],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016000806101000a81548160ff02191690831515021790555042600155600a600260006101000a81548160ff021916908360ff16021790555060ff600260016101000a81548160ff021916908360ff16021790555060006002806101000a81548161ffff021916908361ffff16021790555034801561008357600080fd5b5060405161051638038061051683398181016040528101906100a591906101b9565b8060039060036100b69291906100bd565b5050610289565b82600381019282156100ec579160200282015b828111156100eb5782518255916020019190600101906100d0565b5b5090506100f991906100fd565b5090565b5b808211156101165760008160009055506001016100fe565b5090565b600061012d61012884610213565b6101e2565b9050808285602086028201111561014357600080fd5b60005b85811015610173578161015988826101a4565b845260208401935060208301925050600181019050610146565b5050509392505050565b600082601f83011261018e57600080fd5b600361019b84828561011a565b91505092915050565b6000815190506101b381610272565b92915050565b6000606082840312156101cb57600080fd5b60006101d98482850161017d565b91505092915050565b6000604051905081810181811067ffffffffffffffff8211171561020957610208610243565b5b8060405250919050565b600067ffffffffffffffff82111561022e5761022d610243565b5b602082029050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61027b81610239565b811461028657600080fd5b50565b61027e806102986000396000f3fe608060405234801561001057600080fd5b506004361061005e576000357c010000000000000000000000000000000000000000000000000000000090048063b3cea21714610063578063cf30901214610081578063e1afb08c1461009f575b600080fd5b61006b6100bb565b60405161007891906101d4565b60405180910390f35b6100896100c1565b60405161009691906101b9565b60405180910390f35b6100b960048036038101906100b49190610172565b6100d2565b005b60015481565b60008054906101000a900460ff1681565b600360026003811061010d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01546fffffffffffffffffffffffffffffffff1916816fffffffffffffffffffffffffffffffff19161461014057600080fd5b60008060006101000a81548160ff02191690831515021790555050565b60008135905061016c81610231565b92915050565b60006020828403121561018457600080fd5b60006101928482850161015d565b91505092915050565b6101a4816101ef565b82525050565b6101b381610227565b82525050565b60006020820190506101ce600083018461019b565b92915050565b60006020820190506101e960008301846101aa565b92915050565b60008115159050919050565b60007fffffffffffffffffffffffffffffffff0000000000000000000000000000000082169050919050565b6000819050919050565b61023a816101fb565b811461024557600080fd5b5056fea2646970667358221220335c794c72f5463065e88742c3837ae772513dfd7ac35c9826dda3d798084fcd64736f6c63430008000033";

type PrivacyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrivacyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Privacy__factory extends ContractFactory {
  constructor(...args: PrivacyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Privacy";
  }

  deploy(
    _data: [BytesLike, BytesLike, BytesLike],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Privacy> {
    return super.deploy(_data, overrides || {}) as Promise<Privacy>;
  }
  getDeployTransaction(
    _data: [BytesLike, BytesLike, BytesLike],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_data, overrides || {});
  }
  attach(address: string): Privacy {
    return super.attach(address) as Privacy;
  }
  connect(signer: Signer): Privacy__factory {
    return super.connect(signer) as Privacy__factory;
  }
  static readonly contractName: "Privacy";
  public readonly contractName: "Privacy";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrivacyInterface {
    return new utils.Interface(_abi) as PrivacyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Privacy {
    return new Contract(address, _abi, signerOrProvider) as Privacy;
  }
}