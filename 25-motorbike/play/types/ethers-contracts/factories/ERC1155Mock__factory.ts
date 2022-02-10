/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155Mock, ERC1155MockInterface } from "../ERC1155Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
    inputs: [
      {
        internalType: "string",
        name: "newuri",
        type: "string",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "id",
        type: "uint256",
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620036c7380380620036c7833981810160405260208110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b5060405250505080620001116301ffc9a760e01b6200015a60201b60201c565b62000122816200026360201b60201c565b6200013a63d9b67a2660e01b6200015a60201b60201c565b62000152630e89341c60e01b6200015a60201b60201c565b50506200032e565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620001f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b80600390805190602001906200027b9291906200027f565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002c257805160ff1916838001178555620002f3565b82800160010185558215620002f3579182015b82811115620002f2578251825591602001919060010190620002d5565b5b50905062000302919062000306565b5090565b6200032b91905b80821115620003275760008160009055506001016200030d565b5090565b90565b613389806200033e6000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c80634e1273f41161008c578063a22cb46511610066578063a22cb46514610b1e578063e985e9c514610b6e578063f242432a14610bea578063f5298aca14610cf9576100ce565b80634e1273f4146107225780636b20c454146108c3578063731133e914610a2f576100ce565b8062fdd58e146100d357806301ffc9a71461013557806302fe53051461019a5780630e89341c146102555780631f7fdffa146102fc5780632eb2c2d6146104ff575b600080fd5b61011f600480360360408110156100e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d51565b6040518082815260200191505060405180910390f35b6101806004803603602081101561014b57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610e31565b604051808215151515815260200191505060405180910390f35b610253600480360360208110156101b057600080fd5b81019080803590602001906401000000008111156101cd57600080fd5b8201836020820111156101df57600080fd5b8035906020019184600183028401116401000000008311171561020157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610e98565b005b6102816004803603602081101561026b57600080fd5b8101908080359060200190929190505050610ea4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102c15780820151818401526020810190506102a6565b50505050905090810190601f1680156102ee5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104fd6004803603608081101561031257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561034f57600080fd5b82018360208201111561036157600080fd5b8035906020019184602083028401116401000000008311171561038357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156103e357600080fd5b8201836020820111156103f557600080fd5b8035906020019184602083028401116401000000008311171561041757600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561047757600080fd5b82018360208201111561048957600080fd5b803590602001918460018302840111640100000000831117156104ab57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610f48565b005b610720600480360360a081101561051557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561057257600080fd5b82018360208201111561058457600080fd5b803590602001918460208302840111640100000000831117156105a657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561060657600080fd5b82018360208201111561061857600080fd5b8035906020019184602083028401116401000000008311171561063a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561069a57600080fd5b8201836020820111156106ac57600080fd5b803590602001918460018302840111640100000000831117156106ce57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610f5a565b005b61086c6004803603604081101561073857600080fd5b810190808035906020019064010000000081111561075557600080fd5b82018360208201111561076757600080fd5b8035906020019184602083028401116401000000008311171561078957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156107e957600080fd5b8201836020820111156107fb57600080fd5b8035906020019184602083028401116401000000008311171561081d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506113e8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156108af578082015181840152602081019050610894565b505050509050019250505060405180910390f35b610a2d600480360360608110156108d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561091657600080fd5b82018360208201111561092857600080fd5b8035906020019184602083028401116401000000008311171561094a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156109aa57600080fd5b8201836020820111156109bc57600080fd5b803590602001918460208302840111640100000000831117156109de57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506115c6565b005b610b1c60048036036080811015610a4557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610a9657600080fd5b820183602082011115610aa857600080fd5b80359060200191846001830284011164010000000083111715610aca57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506115d6565b005b610b6c60048036036040811015610b3457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506115e8565b005b610bd060048036036040811015610b8457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611783565b604051808215151515815260200191505060405180910390f35b610cf7600480360360a0811015610c0057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610c7157600080fd5b820183602082011115610c8357600080fd5b80359060200191846001830284011164010000000083111715610ca557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611817565b005b610d4f60048036036060811015610d0f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050611b8c565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610dd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061316c602b913960400191505060405180910390fd5b6001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b610ea181611b9c565b50565b606060038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f3c5780601f10610f1157610100808354040283529160200191610f3c565b820191906000526020600020905b815481529060010190602001808311610f1f57829003601f168201915b50505050509050919050565b610f5484848484611bb6565b50505050565b8151835114610fb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061330b6028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561103a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806132156025913960400191505060405180910390fd5b611042611edb565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480611088575061108785611082611edb565b611783565b5b6110dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061323a6032913960400191505060405180910390fd5b60006110e7611edb565b90506110f7818787878787611ee3565b60008090505b84518110156112cb57600085828151811061111457fe5b60200260200101519050600085838151811061112c57fe5b602002602001015190506111b3816040518060600160405280602a815260200161328f602a91396001600086815260200190815260200160002060008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611eeb9092919063ffffffff16565b6001600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061126a816001600085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611fab90919063ffffffff16565b6001600084815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050508060010190506110fd565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561137b578082015181840152602081019050611360565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156113bd5780820151818401526020810190506113a2565b5050505090500194505050505060405180910390a46113e0818787878787612033565b505050505050565b60608151835114611444576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806132e26029913960400191505060405180910390fd5b606083516040519080825280602002602001820160405280156114765781602001602082028038833980820191505090505b50905060008090505b84518110156115bb57600073ffffffffffffffffffffffffffffffffffffffff168582815181106114ac57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415611521576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806131976031913960400191505060405180910390fd5b6001600085838151811061153157fe5b60200260200101518152602001908152602001600020600086838151811061155557fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548282815181106115a457fe5b60200260200101818152505080600101905061147f565b508091505092915050565b6115d18383836124ab565b505050565b6115e2848484846127e9565b50505050565b8173ffffffffffffffffffffffffffffffffffffffff16611607611edb565b73ffffffffffffffffffffffffffffffffffffffff161415611674576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806132b96029913960400191505060405180910390fd5b8060026000611681611edb565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661172e611edb565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561189d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806132156025913960400191505060405180910390fd5b6118a5611edb565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806118eb57506118ea856118e5611edb565b611783565b5b611940576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806131ec6029913960400191505060405180910390fd5b600061194a611edb565b905061196a81878761195b886129ec565b611964886129ec565b87611ee3565b6119e7836040518060600160405280602a815260200161328f602a91396001600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611eeb9092919063ffffffff16565b6001600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611a9e836001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611fab90919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a4611b84818787878787612a45565b505050505050565b611b97838383612e3b565b505050565b8060039080519060200190611bb292919061306a565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611c3c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806133336021913960400191505060405180910390fd5b8151835114611c96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061330b6028913960400191505060405180910390fd5b6000611ca0611edb565b9050611cb181600087878787611ee3565b60008090505b8451811015611dbd57611d4960016000878481518110611cd357fe5b6020026020010151815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054858381518110611d3357fe5b6020026020010151611fab90919063ffffffff16565b60016000878481518110611d5957fe5b6020026020010151815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080600101915050611cb7565b508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611e6e578082015181840152602081019050611e53565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015611eb0578082015181840152602081019050611e95565b5050505090500194505050505060405180910390a4611ed481600087878787612033565b5050505050565b600033905090565b505050505050565b6000838311158290611f98576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f5d578082015181840152602081019050611f42565b50505050905090810190601f168015611f8a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015612029576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6120528473ffffffffffffffffffffffffffffffffffffffff16613057565b156124a3578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561213657808201518184015260208101905061211b565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561217857808201518184015260208101905061215d565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156121b757808201518184015260208101905061219c565b50505050905090810190601f1680156121e45780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b15801561220957600080fd5b505af192505050801561223d57506040513d602081101561222957600080fd5b810190808051906020019092919050505060015b6124045760006040519050600081526001156123065760443d10156122655760009050612306565b60046000803e60005160e01c6308c379a08114612286576000915050612306565b60043d036004833e81513d602482011167ffffffffffffffff821117156122b257600092505050612306565b808301805167ffffffffffffffff8111156122d4576000945050505050612306565b8060208301013d86018111156122f257600095505050505050612306565b601f19601f82011660405282955050505050505b8061231157506123b3565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561237857808201518184015260208101905061235d565b50505050905090810190601f1680156123a55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806131106034913960400191505060405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146124a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806131446028913960400191505060405180910390fd5b505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061326c6023913960400191505060405180910390fd5b805182511461258b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061330b6028913960400191505060405180910390fd5b6000612595611edb565b90506125b581856000868660405180602001604052806000815250611ee3565b60008090505b83518110156126db576126678382815181106125d357fe5b60200260200101516040518060600160405280602481526020016131c8602491396001600088868151811061260457fe5b6020026020010151815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611eeb9092919063ffffffff16565b6001600086848151811061267757fe5b6020026020010151815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080806001019150506125bb565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561278c578082015181840152602081019050612771565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156127ce5780820151818401526020810190506127b3565b5050505090500194505050505060405180910390a450505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561286f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806133336021913960400191505060405180910390fd5b6000612879611edb565b905061289a8160008761288b886129ec565b612894886129ec565b87611ee3565b6128fd836001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611fab90919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a46129e581600087878787612a45565b5050505050565b6060806001604051908082528060200260200182016040528015612a1f5781602001602082028038833980820191505090505b5090508281600081518110612a3057fe5b60200260200101818152505080915050919050565b612a648473ffffffffffffffffffffffffffffffffffffffff16613057565b15612e33578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612b49578082015181840152602081019050612b2e565b50505050905090810190601f168015612b765780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b158015612b9957600080fd5b505af1925050508015612bcd57506040513d6020811015612bb957600080fd5b810190808051906020019092919050505060015b612d94576000604051905060008152600115612c965760443d1015612bf55760009050612c96565b60046000803e60005160e01c6308c379a08114612c16576000915050612c96565b60043d036004833e81513d602482011167ffffffffffffffff82111715612c4257600092505050612c96565b808301805167ffffffffffffffff811115612c64576000945050505050612c96565b8060208301013d8601811115612c8257600095505050505050612c96565b601f19601f82011660405282955050505050505b80612ca15750612d43565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612d08578082015181840152602081019050612ced565b50505050905090810190601f168015612d355780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806131106034913960400191505060405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612e31576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806131446028913960400191505060405180910390fd5b505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612ec1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061326c6023913960400191505060405180910390fd5b6000612ecb611edb565b9050612efb81856000612edd876129ec565b612ee6876129ec565b60405180602001604052806000815250611ee3565b612f78826040518060600160405280602481526020016131c8602491396001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611eeb9092919063ffffffff16565b6001600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628686604051808381526020018281526020019250505060405180910390a450505050565b600080823b905060008111915050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106130ab57805160ff19168380011785556130d9565b828001600101855582156130d9579182015b828111156130d85782518255916020019190600101906130bd565b5b5090506130e691906130ea565b5090565b61310c91905b808211156131085760008160009055506001016130f0565b5090565b9056fe455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a206275726e20616d6f756e7420657863656564732062616c616e6365455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a206275726e2066726f6d20746865207a65726f2061646472657373455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e73666572455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368455243313135353a206d696e7420746f20746865207a65726f2061646472657373a26469706673582212207b6915190af76dca8ed6ee2a890a11fd5462b3f31782284c4789bdfdfd5bead664736f6c63430006020033";

type ERC1155MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Mock__factory extends ContractFactory {
  constructor(...args: ERC1155MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC1155Mock";
  }

  deploy(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155Mock> {
    return super.deploy(uri, overrides || {}) as Promise<ERC1155Mock>;
  }
  getDeployTransaction(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri, overrides || {});
  }
  attach(address: string): ERC1155Mock {
    return super.attach(address) as ERC1155Mock;
  }
  connect(signer: Signer): ERC1155Mock__factory {
    return super.connect(signer) as ERC1155Mock__factory;
  }
  static readonly contractName: "ERC1155Mock";
  public readonly contractName: "ERC1155Mock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155MockInterface {
    return new utils.Interface(_abi) as ERC1155MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Mock;
  }
}
