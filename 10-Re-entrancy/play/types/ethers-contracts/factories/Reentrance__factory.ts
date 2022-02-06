/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Reentrance, ReentranceInterface } from "../Reentrance";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061057a806100206000396000f3fe60806040526004361061005f576000357c010000000000000000000000000000000000000000000000000000000090048062362a951461006b57806327e235e3146100875780632e1a7d4d146100c457806370a08231146100ed57610066565b3661006657005b600080fd5b6100856004803603810190610080919061036b565b61012a565b005b34801561009357600080fd5b506100ae60048036038101906100a9919061036b565b6101c0565b6040516100bb91906103fb565b60405180910390f35b3480156100d057600080fd5b506100eb60048036038101906100e69190610394565b6101d8565b005b3480156100f957600080fd5b50610114600480360381019061010f919061036b565b6102e3565b60405161012191906103fb565b60405180910390f35b61017b346000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461032b90919063ffffffff16565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60006020528060005260406000206000915090505481565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054106102e05760003373ffffffffffffffffffffffffffffffffffffffff1682604051610243906103e6565b60006040518083038185875af1925050503d8060008114610280576040519150601f19603f3d011682016040523d82523d6000602084013e610285565b606091505b50509050816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102d79190610477565b92505081905550505b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600081836103399190610421565b905092915050565b60008135905061035081610516565b92915050565b6000813590506103658161052d565b92915050565b60006020828403121561037d57600080fd5b600061038b84828501610341565b91505092915050565b6000602082840312156103a657600080fd5b60006103b484828501610356565b91505092915050565b60006103ca600083610416565b9150600082019050919050565b6103e0816104dd565b82525050565b60006103f1826103bd565b9150819050919050565b600060208201905061041060008301846103d7565b92915050565b600081905092915050565b600061042c826104dd565b9150610437836104dd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561046c5761046b6104e7565b5b828201905092915050565b6000610482826104dd565b915061048d836104dd565b9250828210156104a05761049f6104e7565b5b828203905092915050565b60006104b6826104bd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b61051f816104ab565b811461052a57600080fd5b50565b610536816104dd565b811461054157600080fd5b5056fea264697066735822122079cdd4f3f8cbde41193e5f069061404dfb253b70555691ad158d03e5129f499564736f6c63430008000033";

type ReentranceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReentranceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Reentrance__factory extends ContractFactory {
  constructor(...args: ReentranceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Reentrance";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Reentrance> {
    return super.deploy(overrides || {}) as Promise<Reentrance>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Reentrance {
    return super.attach(address) as Reentrance;
  }
  connect(signer: Signer): Reentrance__factory {
    return super.connect(signer) as Reentrance__factory;
  }
  static readonly contractName: "Reentrance";
  public readonly contractName: "Reentrance";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentranceInterface {
    return new utils.Interface(_abi) as ReentranceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Reentrance {
    return new Contract(address, _abi, signerOrProvider) as Reentrance;
  }
}
