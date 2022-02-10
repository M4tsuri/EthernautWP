/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EnumerableUintSetMock,
  EnumerableUintSetMockInterface,
} from "../EnumerableUintSetMock";

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
        name: "value",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
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
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061053b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631003e2d21461005c5780631f7b6d321461008a5780634cc82215146100a8578063c34052e0146100d6578063e0886f901461011c575b600080fd5b6100886004803603602081101561007257600080fd5b810190808035906020019092919050505061015e565b005b6100926101b5565b6040518082815260200191505060405180910390f35b6100d4600480360360208110156100be57600080fd5b81019080803590602001909291905050506101c6565b005b610102600480360360208110156100ec57600080fd5b810190808035906020019092919050505061021d565b604051808215151515815260200191505060405180910390f35b6101486004803603602081101561013257600080fd5b810190808035906020019092919050505061023a565b6040518082815260200191505060405180910390f35b600061017482600061025790919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e3381604051808215151515815260200191505060405180910390a15050565b60006101c16000610271565b905090565b60006101dc82600061028690919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e3381604051808215151515815260200191505060405180910390a15050565b60006102338260006102a090919063ffffffff16565b9050919050565b60006102508260006102ba90919063ffffffff16565b9050919050565b6000610269836000018360001b6102d4565b905092915050565b600061027f82600001610344565b9050919050565b6000610298836000018360001b610355565b905092915050565b60006102b2836000018360001b61043d565b905092915050565b60006102c98360000183610460565b60001c905092915050565b60006102e0838361043d565b61033957826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061033e565b600090505b92915050565b600081600001805490509050919050565b6000808360010160008481526020019081526020016000205490506000811461043157600060018203905060006001866000018054905003905060008660000182815481106103a057fe5b90600052602060002001549050808760000184815481106103bd57fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806103f557fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610437565b60009150505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b6000818360000180549050116104c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806104e46022913960400191505060405180910390fd5b8260000182815481106104d057fe5b906000526020600020015490509291505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473a26469706673582212207e3efa367073db6ffbe1ffc84e06392bfe843c2a32add00ca5a55e3b7f5cca0064736f6c63430006020033";

type EnumerableUintSetMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnumerableUintSetMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnumerableUintSetMock__factory extends ContractFactory {
  constructor(...args: EnumerableUintSetMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "EnumerableUintSetMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EnumerableUintSetMock> {
    return super.deploy(overrides || {}) as Promise<EnumerableUintSetMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EnumerableUintSetMock {
    return super.attach(address) as EnumerableUintSetMock;
  }
  connect(signer: Signer): EnumerableUintSetMock__factory {
    return super.connect(signer) as EnumerableUintSetMock__factory;
  }
  static readonly contractName: "EnumerableUintSetMock";
  public readonly contractName: "EnumerableUintSetMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnumerableUintSetMockInterface {
    return new utils.Interface(_abi) as EnumerableUintSetMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnumerableUintSetMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EnumerableUintSetMock;
  }
}