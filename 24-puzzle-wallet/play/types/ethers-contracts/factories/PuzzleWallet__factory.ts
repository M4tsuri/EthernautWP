/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PuzzleWallet, PuzzleWalletInterface } from "../PuzzleWallet";

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
    inputs: [],
    name: "maxBalance",
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
        name: "",
        type: "address",
      },
    ],
    name: "whitelisted",
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
        internalType: "uint256",
        name: "_maxBalance",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxBalance",
        type: "uint256",
      },
    ],
    name: "setMaxBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611496806100206000396000f3fe6080604052600436106100915760003560e01c8063b61d27f611610059578063b61d27f61461016e578063b7b0422d1461018a578063d0e30db0146101b3578063d936547e146101bd578063e43252d7146101fa57610091565b806327e235e31461009657806373ad468a146100d35780638da5cb5b146100fe5780639d51d9b714610129578063ac9650d814610152575b600080fd5b3480156100a257600080fd5b506100bd60048036036100b89190810190610d58565b610223565b6040516100ca9190611355565b60405180910390f35b3480156100df57600080fd5b506100e861023b565b6040516100f59190611355565b60405180910390f35b34801561010a57600080fd5b50610113610241565b60405161012091906111bd565b60405180910390f35b34801561013557600080fd5b50610150600480360361014b9190810190610e32565b610266565b005b61016c60048036036101679190810190610ded565b61033f565b005b61018860048036036101839190810190610d81565b610645565b005b34801561019657600080fd5b506101b160048036036101ac9190810190610e32565b61089f565b005b6101bb61092e565b005b3480156101c957600080fd5b506101e460048036036101df9190810190610d58565b610a96565b6040516101f191906111d8565b60405180910390f35b34801561020657600080fd5b50610221600480360361021c9190810190610d58565b610ab6565b005b60036020528060005260406000206000915090505481565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166102f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e990611275565b60405180910390fd5b60004714610335576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032c906112d5565b60405180910390fd5b8060018190555050565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c290611275565b60405180910390fd5b600080905060008090505b8383905081101561063f5760608484838181106103ef57fe5b905060200281018035600160200383360303811261040c57600080fd5b8083019250508135905060208201915067ffffffffffffffff81111561043157600080fd5b60018102360382131561044357600080fd5b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060006020820151905063d0e30db060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561052457831561051f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051690611335565b60405180910390fd5b600193505b60003073ffffffffffffffffffffffffffffffffffffffff1687878681811061054957fe5b905060200281018035600160200383360303811261056657600080fd5b8083019250508135905060208201915067ffffffffffffffff81111561058b57600080fd5b60018102360382131561059d57600080fd5b6040516105ab92919061118b565b600060405180830381855af49150503d80600081146105e6576040519150601f19603f3d011682016040523d82523d6000602084013e6105eb565b606091505b505090508061062f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062690611315565b60405180910390fd5b50505080806001019150506103d6565b50505050565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166106d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c890611275565b60405180910390fd5b82600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074a90611255565b60405180910390fd5b6107a583600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ba090919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008473ffffffffffffffffffffffffffffffffffffffff168484846040516108129291906111a4565b60006040518083038185875af1925050503d806000811461084f576040519150601f19603f3d011682016040523d82523d6000602084013e610854565b606091505b5050905080610898576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088f90611235565b60405180910390fd5b5050505050565b6000600154146108e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108db906112f5565b60405180910390fd5b80600181905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166109ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b190611275565b60405180910390fd5b6001544711156109ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f6906112b5565b60405180910390fd5b610a5134600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610bea90919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b60026020528060005260406000206000915054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3c90611295565b60405180910390fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000610be283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610c3f565b905092915050565b600080828401905083811015610c35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2c90611215565b60405180910390fd5b8091505092915050565b6000838311158290610c87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7e91906111f3565b60405180910390fd5b5060008385039050809150509392505050565b600081359050610ca981611432565b92915050565b60008083601f840112610cc157600080fd5b8235905067ffffffffffffffff811115610cda57600080fd5b602083019150836020820283011115610cf257600080fd5b9250929050565b60008083601f840112610d0b57600080fd5b8235905067ffffffffffffffff811115610d2457600080fd5b602083019150836001820283011115610d3c57600080fd5b9250929050565b600081359050610d5281611449565b92915050565b600060208284031215610d6a57600080fd5b6000610d7884828501610c9a565b91505092915050565b60008060008060608587031215610d9757600080fd5b6000610da587828801610c9a565b9450506020610db687828801610d43565b935050604085013567ffffffffffffffff811115610dd357600080fd5b610ddf87828801610cf9565b925092505092959194509250565b60008060208385031215610e0057600080fd5b600083013567ffffffffffffffff811115610e1a57600080fd5b610e2685828601610caf565b92509250509250929050565b600060208284031215610e4457600080fd5b6000610e5284828501610d43565b91505092915050565b610e6481611397565b82525050565b610e73816113a9565b82525050565b6000610e85838561137b565b9350610e928385846113df565b82840190509392505050565b6000610eaa838561137b565b9350610eb78385846113df565b82840190509392505050565b6000610ece82611370565b610ed88185611386565b9350610ee88185602086016113ee565b610ef181611421565b840191505092915050565b6000610f09601b83611386565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b6000610f49601083611386565b91507f457865637574696f6e206661696c6564000000000000000000000000000000006000830152602082019050919050565b6000610f89601483611386565b91507f496e73756666696369656e742062616c616e63650000000000000000000000006000830152602082019050919050565b6000610fc9600f83611386565b91507f4e6f742077686974656c697374656400000000000000000000000000000000006000830152602082019050919050565b6000611009600d83611386565b91507f4e6f7420746865206f776e6572000000000000000000000000000000000000006000830152602082019050919050565b6000611049601383611386565b91507f4d61782062616c616e63652072656163686564000000000000000000000000006000830152602082019050919050565b6000611089601983611386565b91507f436f6e74726163742062616c616e6365206973206e6f742030000000000000006000830152602082019050919050565b60006110c9601383611386565b91507f416c726561647920696e697469616c697a6564000000000000000000000000006000830152602082019050919050565b6000611109601b83611386565b91507f4572726f72207768696c652064656c65676174696e672063616c6c00000000006000830152602082019050919050565b6000611149601f83611386565b91507f4465706f7369742063616e206f6e6c792062652063616c6c6564206f6e6365006000830152602082019050919050565b611185816113d5565b82525050565b6000611198828486610e9e565b91508190509392505050565b60006111b1828486610e79565b91508190509392505050565b60006020820190506111d26000830184610e5b565b92915050565b60006020820190506111ed6000830184610e6a565b92915050565b6000602082019050818103600083015261120d8184610ec3565b905092915050565b6000602082019050818103600083015261122e81610efc565b9050919050565b6000602082019050818103600083015261124e81610f3c565b9050919050565b6000602082019050818103600083015261126e81610f7c565b9050919050565b6000602082019050818103600083015261128e81610fbc565b9050919050565b600060208201905081810360008301526112ae81610ffc565b9050919050565b600060208201905081810360008301526112ce8161103c565b9050919050565b600060208201905081810360008301526112ee8161107c565b9050919050565b6000602082019050818103600083015261130e816110bc565b9050919050565b6000602082019050818103600083015261132e816110fc565b9050919050565b6000602082019050818103600083015261134e8161113c565b9050919050565b600060208201905061136a600083018461117c565b92915050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006113a2826113b5565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561140c5780820151818401526020810190506113f1565b8381111561141b576000848401525b50505050565b6000601f19601f8301169050919050565b61143b81611397565b811461144657600080fd5b50565b611452816113d5565b811461145d57600080fd5b5056fea264697066735822122028be5a912564e8a5dd5f8143ef1dc1af26dc80b9bb33b6a083f04bf575b7680064736f6c63430006020033";

type PuzzleWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PuzzleWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PuzzleWallet__factory extends ContractFactory {
  constructor(...args: PuzzleWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PuzzleWallet";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PuzzleWallet> {
    return super.deploy(overrides || {}) as Promise<PuzzleWallet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PuzzleWallet {
    return super.attach(address) as PuzzleWallet;
  }
  connect(signer: Signer): PuzzleWallet__factory {
    return super.connect(signer) as PuzzleWallet__factory;
  }
  static readonly contractName: "PuzzleWallet";
  public readonly contractName: "PuzzleWallet";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PuzzleWalletInterface {
    return new utils.Interface(_abi) as PuzzleWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PuzzleWallet {
    return new Contract(address, _abi, signerOrProvider) as PuzzleWallet;
  }
}
