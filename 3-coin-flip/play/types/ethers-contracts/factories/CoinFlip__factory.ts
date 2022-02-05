/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoinFlip, CoinFlipInterface } from "../CoinFlip";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "consecutiveWins",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_guess",
        type: "bool",
      },
    ],
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
  "0x60806040527f800000000000000000000000000000000000000000000000000000000000000060025534801561003457600080fd5b506000808190555061037f8061004b6000396000f3fe608060405234801561001057600080fd5b5060043610610053576000357c0100000000000000000000000000000000000000000000000000000000900480631d263f6714610058578063e6f334d714610088575b600080fd5b610072600480360381019061006d9190610193565b6100a6565b60405161007f91906101da565b60405180910390f35b61009061014c565b60405161009d91906101f5565b60405180910390f35b6000806100bd60014361015290919063ffffffff16565b406001900490508060015414156100d357600080fd5b8060018190555060006100f16002548361016890919063ffffffff16565b9050600060018214610104576000610107565b60015b90508415158115151415610138576000808154809291906101279061028b565b919050555060019350505050610147565b60008081905550600093505050505b919050565b60005481565b600081836101609190610241565b905092915050565b600081836101769190610210565b905092915050565b60008135905061018d81610332565b92915050565b6000602082840312156101a557600080fd5b60006101b38482850161017e565b91505092915050565b6101c581610275565b82525050565b6101d481610281565b82525050565b60006020820190506101ef60008301846101bc565b92915050565b600060208201905061020a60008301846101cb565b92915050565b600061021b82610281565b915061022683610281565b92508261023657610235610303565b5b828204905092915050565b600061024c82610281565b915061025783610281565b92508282101561026a576102696102d4565b5b828203905092915050565b60008115159050919050565b6000819050919050565b600061029682610281565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156102c9576102c86102d4565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b61033b81610275565b811461034657600080fd5b5056fea2646970667358221220e6a0ff6b874cad662517f5e2c9565e9694737ada44d672f161f8bd2a334dafaa64736f6c63430008000033";

type CoinFlipConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CoinFlipConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CoinFlip__factory extends ContractFactory {
  constructor(...args: CoinFlipConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CoinFlip";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoinFlip> {
    return super.deploy(overrides || {}) as Promise<CoinFlip>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoinFlip {
    return super.attach(address) as CoinFlip;
  }
  connect(signer: Signer): CoinFlip__factory {
    return super.connect(signer) as CoinFlip__factory;
  }
  static readonly contractName: "CoinFlip";
  public readonly contractName: "CoinFlip";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoinFlipInterface {
    return new utils.Interface(_abi) as CoinFlipInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinFlip {
    return new Contract(address, _abi, signerOrProvider) as CoinFlip;
  }
}
