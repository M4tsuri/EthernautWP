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
import type {
  ERC721ReceiverMock,
  ERC721ReceiverMockInterface,
} from "../ERC721ReceiverMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "retval",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "reverts",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104043803806104048339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548163ffffffff021916908360e01c021790555080600060046101000a81548160ff021916908315150217905550505061036e806100966000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b6101336004803603608081101561004657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100ad57600080fd5b8201836020820111156100bf57600080fd5b803590602001918460018302840111640100000000831117156100e157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610187565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b60008060049054906101000a900460ff161561020b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f45524337323152656365697665724d6f636b3a20726576657274696e6700000081525060200191505060405180910390fd5b7f28fa6e16458f9c24aa59ddd4085264573006dbe30304837873c7deafc702b038858585855a604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156102e15780820151818401526020810190506102c6565b50505050905090810190601f16801561030e5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a16000809054906101000a900460e01b905094935050505056fea2646970667358221220ee703cf5dc5360595e9c77ee2dae0561bb3472cb5a5467ef2902a157447ebd1764736f6c63430006020033";

type ERC721ReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ReceiverMock__factory extends ContractFactory {
  constructor(...args: ERC721ReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721ReceiverMock";
  }

  deploy(
    retval: BytesLike,
    reverts: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721ReceiverMock> {
    return super.deploy(
      retval,
      reverts,
      overrides || {}
    ) as Promise<ERC721ReceiverMock>;
  }
  getDeployTransaction(
    retval: BytesLike,
    reverts: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(retval, reverts, overrides || {});
  }
  attach(address: string): ERC721ReceiverMock {
    return super.attach(address) as ERC721ReceiverMock;
  }
  connect(signer: Signer): ERC721ReceiverMock__factory {
    return super.connect(signer) as ERC721ReceiverMock__factory;
  }
  static readonly contractName: "ERC721ReceiverMock";
  public readonly contractName: "ERC721ReceiverMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ReceiverMockInterface {
    return new utils.Interface(_abi) as ERC721ReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721ReceiverMock;
  }
}