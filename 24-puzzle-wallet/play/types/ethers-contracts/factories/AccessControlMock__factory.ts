/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccessControlMock,
  AccessControlMockInterface,
} from "../AccessControlMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "adminRoleId",
        type: "bytes32",
      },
    ],
    name: "setRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100316000801b61002661003660201b60201c565b61003e60201b60201c565b6101be565b600033905090565b61004e828261005260201b60201c565b5050565b61007d816000808581526020019081526020016000206000016100ef60201b6107901790919060201c565b156100eb5761009061003660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600061011d836000018373ffffffffffffffffffffffffffffffffffffffff1660001b61012560201b60201c565b905092915050565b6000610137838361019b60201b60201c565b610190578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050610195565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b610ae5806101cd6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80639010d07c116100665780639010d07c146101ae57806391d1485414610226578063a217fddf1461028c578063ca15c873146102aa578063d547741f146102ec57610093565b80631e4e009114610098578063248a9ca3146100d05780632f2ff15d1461011257806336568abe14610160575b600080fd5b6100ce600480360360408110156100ae57600080fd5b81019080803590602001909291908035906020019092919050505061033a565b005b6100fc600480360360208110156100e657600080fd5b8101908080359060200190929190505050610348565b6040518082815260200191505060405180910390f35b61015e6004803603604081101561012857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610367565b005b6101ac6004803603604081101561017657600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103f0565b005b6101e4600480360360408110156101c457600080fd5b810190808035906020019092919080359060200190929190505050610489565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102726004803603604081101561023c57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104ba565b604051808215151515815260200191505060405180910390f35b6102946104eb565b6040518082815260200191505060405180910390f35b6102d6600480360360208110156102c057600080fd5b81019080803590602001909291905050506104f2565b6040518082815260200191505060405180910390f35b6103386004803603604081101561030257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610518565b005b61034482826105a1565b5050565b6000806000838152602001908152602001600020600201549050919050565b61038d60008084815260200190815260200160002060020154610388610603565b6104ba565b6103e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180610a22602f913960400191505060405180910390fd5b6103ec828261060b565b5050565b6103f8610603565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461047b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180610a81602f913960400191505060405180910390fd5b610485828261069e565b5050565b60006104b28260008086815260200190815260200160002060000161073190919063ffffffff16565b905092915050565b60006104e38260008086815260200190815260200160002060000161074b90919063ffffffff16565b905092915050565b6000801b81565b600061051160008084815260200190815260200160002060000161077b565b9050919050565b61053e60008084815260200190815260200160002060020154610539610603565b6104ba565b610593576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180610a516030913960400191505060405180910390fd5b61059d828261069e565b5050565b8060008084815260200190815260200160002060020154837fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff60405160405180910390a480600080848152602001908152602001600020600201819055505050565b600033905090565b6106328160008085815260200190815260200160002060000161079090919063ffffffff16565b1561069a5761063f610603565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6106c5816000808581526020019081526020016000206000016107c090919063ffffffff16565b1561072d576106d2610603565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600061074083600001836107f0565b60001c905092915050565b6000610773836000018373ffffffffffffffffffffffffffffffffffffffff1660001b610873565b905092915050565b600061078982600001610896565b9050919050565b60006107b8836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6108a7565b905092915050565b60006107e8836000018373ffffffffffffffffffffffffffffffffffffffff1660001b610917565b905092915050565b600081836000018054905011610851576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610a006022913960400191505060405180910390fd5b82600001828154811061086057fe5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b60006108b38383610873565b61090c578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050610911565b600090505b92915050565b600080836001016000848152602001908152602001600020549050600081146109f3576000600182039050600060018660000180549050039050600086600001828154811061096257fe5b906000526020600020015490508087600001848154811061097f57fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806109b757fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506109f9565b60009150505b9291505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a264697066735822122066064cac5b21e73a9040f1355af65bf9b2c074d05a3628df9b1fc2b60649b2c764736f6c63430006020033";

type AccessControlMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccessControlMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccessControlMock__factory extends ContractFactory {
  constructor(...args: AccessControlMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AccessControlMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccessControlMock> {
    return super.deploy(overrides || {}) as Promise<AccessControlMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccessControlMock {
    return super.attach(address) as AccessControlMock;
  }
  connect(signer: Signer): AccessControlMock__factory {
    return super.connect(signer) as AccessControlMock__factory;
  }
  static readonly contractName: "AccessControlMock";
  public readonly contractName: "AccessControlMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControlMockInterface {
    return new utils.Interface(_abi) as AccessControlMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControlMock {
    return new Contract(address, _abi, signerOrProvider) as AccessControlMock;
  }
}
