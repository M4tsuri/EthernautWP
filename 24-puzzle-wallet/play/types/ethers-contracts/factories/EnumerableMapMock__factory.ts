/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EnumerableMapMock,
  EnumerableMapMockInterface,
} from "../EnumerableMapMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "OperationResult",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
    ],
    name: "contains",
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
        name: "key",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "length",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "at",
    outputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
    ],
    name: "get",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061086a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631f7b6d32146100675780632f30c6f6146100855780634cc82215146100d35780639507d39a14610101578063c34052e01461016f578063e0886f90146101b5575b600080fd5b61006f61022a565b6040518082815260200191505060405180910390f35b6100d16004803603604081101561009b57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061023b565b005b6100ff600480360360208110156100e957600080fd5b8101908080359060200190929190505050610295565b005b61012d6004803603602081101561011757600080fd5b81019080803590602001909291905050506102ec565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61019b6004803603602081101561018557600080fd5b8101908080359060200190929190505050610309565b604051808215151515815260200191505060405180910390f35b6101e1600480360360208110156101cb57600080fd5b8101908080359060200190929190505050610326565b604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390f35b60006102366000610346565b905090565b60006102538383600061035b9092919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e3381604051808215151515815260200191505060405180910390a1505050565b60006102ab82600061039090919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e3381604051808215151515815260200191505060405180910390a15050565b60006103028260006103aa90919063ffffffff16565b9050919050565b600061031f8260006103c790919063ffffffff16565b9050919050565b60008061033d8360006103e190919063ffffffff16565b91509150915091565b600061035482600001610410565b9050919050565b6000610387846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b610421565b90509392505050565b60006103a2836000018360001b6104fd565b905092915050565b60006103bc836000018360001b610616565b60001c905092915050565b60006103d9836000018360001b610660565b905092915050565b6000806000806103f48660000186610683565b915091508160001c8160001c8090509350935050509250929050565b600081600001805490509050919050565b60008084600101600085815260200190815260200160002054905060008114156104c8578460000160405180604001604052808681526020018581525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084600001805490508560010160008681526020019081526020016000208190555060019150506104f6565b828560000160018303815481106104db57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b6000808360010160008481526020019081526020016000205490506000811461060a576000600182039050600060018660000180549050039050600086600001828154811061054857fe5b906000526020600020906002020190508087600001848154811061056857fe5b90600052602060002090600202016000820154816000015560018201548160010155905050600183018760010160008360000154815260200190815260200160002081905550866000018054806105bb57fe5b6001900381819060005260206000209060020201600080820160009055600182016000905550509055866001016000878152602001908152602001600020600090556001945050505050610610565b60009150505b92915050565b600061065883836040518060400160405280601e81526020017f456e756d657261626c654d61703a206e6f6e6578697374656e74206b6579000081525061071c565b905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600080828460000180549050116106e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806108136022913960400191505060405180910390fd5b60008460000184815481106106f657fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600080846001016000858152602001908152602001600020549050600081141583906107e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156107a857808201518184015260208101905061078d565b50505050905090810190601f1680156107d55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106107f657fe5b906000526020600020906002020160010154915050939250505056fe456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e6473a26469706673582212204f2a8a3e54e4bd961fed2bfd9d08310f57cf4a25bfff76b95c8977181c65661a64736f6c63430006020033";

type EnumerableMapMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnumerableMapMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnumerableMapMock__factory extends ContractFactory {
  constructor(...args: EnumerableMapMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "EnumerableMapMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnumerableMapMock> {
    return super.deploy(overrides || {}) as Promise<EnumerableMapMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EnumerableMapMock {
    return super.attach(address) as EnumerableMapMock;
  }
  connect(signer: Signer): EnumerableMapMock__factory {
    return super.connect(signer) as EnumerableMapMock__factory;
  }
  static readonly contractName: "EnumerableMapMock";
  public readonly contractName: "EnumerableMapMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnumerableMapMockInterface {
    return new utils.Interface(_abi) as EnumerableMapMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnumerableMapMock {
    return new Contract(address, _abi, signerOrProvider) as EnumerableMapMock;
  }
}