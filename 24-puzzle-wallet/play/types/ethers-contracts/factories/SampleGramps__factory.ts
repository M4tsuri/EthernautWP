/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SampleGramps, SampleGrampsInterface } from "../SampleGramps";

const _abi = [
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105c5806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634a6c9db6146100515780638129fc1c14610073578063f62d18881461007d578063fa39851f14610138575b600080fd5b6100596101bb565b604051808215151515815260200191505060405180910390f35b61007b6101ce565b005b6101366004803603602081101561009357600080fd5b81019080803590602001906401000000008111156100b057600080fd5b8201836020820111156100c257600080fd5b803590602001918460018302840111640100000000831117156100e457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102e8565b005b610140610407565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610180578082015181840152602081019050610165565b50505050905090810190601f1680156101ad5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060029054906101000a900460ff1681565b600060019054906101000a900460ff16806101ed57506101ec6104a5565b5b8061020457506000809054906101000a900460ff16155b610259576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610562602e913960400191505060405180910390fd5b60008060019054906101000a900460ff1615905080156102a9576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6001600060026101000a81548160ff02191690831515021790555080156102e55760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff168061030757506103066104a5565b5b8061031e57506000809054906101000a900460ff16155b610373576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610562602e913960400191505060405180910390fd5b60008060019054906101000a900460ff1615905080156103c3576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6103cb6101ce565b81600190805190602001906103e19291906104bc565b5080156104035760008060016101000a81548160ff0219169083151502179055505b5050565b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561049d5780601f106104725761010080835404028352916020019161049d565b820191906000526020600020905b81548152906001019060200180831161048057829003601f168201915b505050505081565b6000803090506000813b9050600081149250505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106104fd57805160ff191683800117855561052b565b8280016001018555821561052b579182015b8281111561052a57825182559160200191906001019061050f565b5b509050610538919061053c565b5090565b61055e91905b8082111561055a576000816000905550600101610542565b5090565b9056fe496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564a26469706673582212208db74d0088c53badd01d5f2478e28c7ce2f9d7194b734e1f6eb42b845063b25264736f6c63430006020033";

type SampleGrampsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SampleGrampsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SampleGramps__factory extends ContractFactory {
  constructor(...args: SampleGrampsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SampleGramps";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SampleGramps> {
    return super.deploy(overrides || {}) as Promise<SampleGramps>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SampleGramps {
    return super.attach(address) as SampleGramps;
  }
  connect(signer: Signer): SampleGramps__factory {
    return super.connect(signer) as SampleGramps__factory;
  }
  static readonly contractName: "SampleGramps";
  public readonly contractName: "SampleGramps";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SampleGrampsInterface {
    return new utils.Interface(_abi) as SampleGrampsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleGramps {
    return new Contract(address, _abi, signerOrProvider) as SampleGramps;
  }
}
