/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Implementation2,
  Implementation2Interface,
} from "../Implementation2";

const _abi = [
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
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061022a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063209652551461004657806355241077146100645780638129fc1c14610092575b600080fd5b61004e61009c565b6040518082815260200191505060405180910390f35b6100906004803603602081101561007a57600080fd5b81019080803590602001909291905050506100a6565b005b61009a6100b0565b005b6000600154905090565b8060018190555050565b600060019054906101000a900460ff16806100cf57506100ce6101af565b5b806100e657506000809054906101000a900460ff16155b61013b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806101c7602e913960400191505060405180910390fd5b60008060019054906101000a900460ff16159050801561018b576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156101ac5760008060016101000a81548160ff0219169083151502179055505b50565b6000803090506000813b905060008114925050509056fe496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564a26469706673582212203f8b7d3e67996e6c69346096f5a383dc40e5b08913bbb63a83bb66ace2f7ae0264736f6c63430006020033";

type Implementation2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Implementation2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Implementation2__factory extends ContractFactory {
  constructor(...args: Implementation2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Implementation2";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Implementation2> {
    return super.deploy(overrides || {}) as Promise<Implementation2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Implementation2 {
    return super.attach(address) as Implementation2;
  }
  connect(signer: Signer): Implementation2__factory {
    return super.connect(signer) as Implementation2__factory;
  }
  static readonly contractName: "Implementation2";
  public readonly contractName: "Implementation2";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Implementation2Interface {
    return new utils.Interface(_abi) as Implementation2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Implementation2 {
    return new Contract(address, _abi, signerOrProvider) as Implementation2;
  }
}