/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ContextMockCaller,
  ContextMockCallerInterface,
} from "../ContextMockCaller";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ContextMock",
        name: "context",
        type: "address",
      },
    ],
    name: "callSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ContextMock",
        name: "context",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "integerValue",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "stringValue",
        type: "string",
      },
    ],
    name: "callData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102d9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100355760003560e01c80628604591461003a5780633207ad961461011f575b600080fd5b61011d6004803603606081101561005057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561009757600080fd5b8201836020820111156100a957600080fd5b803590602001918460018302840111640100000000831117156100cb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610163565b005b6101616004803603602081101561013557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610240565b005b8273ffffffffffffffffffffffffffffffffffffffff1663376bf26283836040518363ffffffff1660e01b81526004018083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101d65780820151818401526020810190506101bb565b50505050905090810190601f1680156102035780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b15801561022357600080fd5b505af1158015610237573d6000803e3d6000fd5b50505050505050565b8073ffffffffffffffffffffffffffffffffffffffff1663d737d0c76040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561028857600080fd5b505af115801561029c573d6000803e3d6000fd5b505050505056fea26469706673582212203b03f2cfbdb7eb0926e5a43f835382f5ad3f78f4fa55625f1a38566f95891c7964736f6c63430006020033";

type ContextMockCallerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContextMockCallerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContextMockCaller__factory extends ContractFactory {
  constructor(...args: ContextMockCallerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ContextMockCaller";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContextMockCaller> {
    return super.deploy(overrides || {}) as Promise<ContextMockCaller>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ContextMockCaller {
    return super.attach(address) as ContextMockCaller;
  }
  connect(signer: Signer): ContextMockCaller__factory {
    return super.connect(signer) as ContextMockCaller__factory;
  }
  static readonly contractName: "ContextMockCaller";
  public readonly contractName: "ContextMockCaller";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContextMockCallerInterface {
    return new utils.Interface(_abi) as ContextMockCallerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContextMockCaller {
    return new Contract(address, _abi, signerOrProvider) as ContextMockCaller;
  }
}
