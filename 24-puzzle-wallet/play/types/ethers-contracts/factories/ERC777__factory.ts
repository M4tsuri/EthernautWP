/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC777, ERC777Interface } from "../ERC777";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "defaultOperators",
        type: "address[]",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "AuthorizedOperator",
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
        indexed: false,
        internalType: "uint256",
        name: "amount",
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
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Burned",
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
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
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
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Minted",
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
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "RevokedOperator",
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
        name: "amount",
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
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Sent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "name",
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
    name: "symbol",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "granularity",
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
    name: "totalSupply",
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
        internalType: "address",
        name: "tokenHolder",
        type: "address",
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
        internalType: "address",
        name: "recipient",
        type: "address",
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
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
  {
    inputs: [
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
    name: "burn",
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
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "isOperatorFor",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "authorizeOperator",
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
    ],
    name: "revokeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
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
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorSend",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x60806040523480156200001157600080fd5b506040516200346738038062003467833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084640100000000821115620001d257600080fd5b83820191506020820185811115620001e957600080fd5b82518660208202830111640100000000821117156200020757600080fd5b8083526020830192505050908051906020019060200280838360005b838110156200024057808201518184015260208101905062000223565b5050505090500160405250505082600290805190602001906200026592919062000590565b5081600390805190602001906200027e92919062000590565b5080600490805190602001906200029792919062000617565b5060008090505b6004805490508110156200034a5760016005600060048481548110620002c057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806001019150506200029e565b50731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d3060405180807f455243373737546f6b656e000000000000000000000000000000000000000000815250600b0190506040518091039020306040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b1580156200045057600080fd5b505af115801562000465573d6000803e3d6000fd5b50505050731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d3060405180807f4552433230546f6b656e00000000000000000000000000000000000000000000815250600a0190506040518091039020306040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b1580156200056e57600080fd5b505af115801562000583573d6000803e3d6000fd5b5050505050505062000714565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620005d357805160ff191683800117855562000604565b8280016001018555821562000604579182015b8281111562000603578251825591602001919060010190620005e6565b5b509050620006139190620006a6565b5090565b82805482825590600052602060002090810192821562000693579160200282015b82811115620006925782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000638565b5b509050620006a29190620006ce565b5090565b620006cb91905b80821115620006c7576000816000905550600101620006ad565b5090565b90565b6200071191905b808211156200070d57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101620006d5565b5090565b90565b612d4380620007246000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063959b8c3f116100a2578063d95b637111610071578063d95b63711461074f578063dd62ed3e146107cb578063fad8b32a14610843578063fc673c4f14610887578063fe9d930314610a0357610116565b8063959b8c3f1461053d57806395d89b41146105815780639bd9bbc614610604578063a9059cbb146106e957610116565b806323b872dd116100e957806323b872dd14610281578063313ce56714610307578063556f0dc71461032b57806362ad1b831461034957806370a08231146104e557610116565b806306e485381461011b57806306fdde031461017a578063095ea7b3146101fd57806318160ddd14610263575b600080fd5b610123610ac8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561016657808201518184015260208101905061014b565b505050509050019250505060405180910390f35b610182610b56565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c25780820151818401526020810190506101a7565b50505050905090810190601f1680156101ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102496004803603604081101561021357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bf8565b604051808215151515815260200191505060405180910390f35b61026b610c1b565b6040518082815260200191505060405180910390f35b6102ed6004803603606081101561029757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c25565b604051808215151515815260200191505060405180910390f35b61030f610e83565b604051808260ff1660ff16815260200191505060405180910390f35b610333610e8c565b6040518082815260200191505060405180910390f35b6104e3600480360360a081101561035f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156103c657600080fd5b8201836020820111156103d857600080fd5b803590602001918460018302840111640100000000831117156103fa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561045d57600080fd5b82018360208201111561046f57600080fd5b8035906020019184600183028401116401000000008311171561049157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610e95565b005b610527600480360360208110156104fb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f11565b6040518082815260200191505060405180910390f35b61057f6004803603602081101561055357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f59565b005b6105896111d0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105c95780820151818401526020810190506105ae565b50505050905090810190601f1680156105f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106e76004803603606081101561061a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561066157600080fd5b82018360208201111561067357600080fd5b8035906020019184600183028401116401000000008311171561069557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611272565b005b610735600480360360408110156106ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061129c565b604051808215151515815260200191505060405180910390f35b6107b16004803603604081101561076557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113c0565b604051808215151515815260200191505060405180910390f35b61082d600480360360408110156107e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611571565b6040518082815260200191505060405180910390f35b6108856004803603602081101561085957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115f8565b005b610a016004803603608081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156108e457600080fd5b8201836020820111156108f657600080fd5b8035906020019184600183028401116401000000008311171561091857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561097b57600080fd5b82018360208201111561098d57600080fd5b803590602001918460018302840111640100000000831117156109af57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061186f565b005b610ac660048036036040811015610a1957600080fd5b810190808035906020019092919080359060200190640100000000811115610a4057600080fd5b820183602082011115610a5257600080fd5b80359060200191846001830284011164010000000083111715610a7457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506118e7565b005b60606004805480602002602001604051908101604052809291908181526020018280548015610b4c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610b02575b5050505050905090565b606060028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bee5780601f10610bc357610100808354040283529160200191610bee565b820191906000526020600020905b815481529060010190602001808311610bd157829003601f168201915b5050505050905090565b600080610c0361190d565b9050610c10818585611915565b600191505092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612c296024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610d32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612ca26026913960400191505060405180910390fd5b6000610d3c61190d565b9050610d6a818686866040518060200160405280600081525060405180602001604052806000815250611b0c565b610d96818686866040518060200160405280600081525060405180602001604052806000815250611e26565b610e498582610e4486604051806060016040528060298152602001612c7960299139600860008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121359092919063ffffffff16565b611915565b610e7781868686604051806020016040528060008152506040518060200160405280600081525060006121f5565b60019150509392505050565b60006012905090565b60006001905090565b610ea6610ea061190d565b866113c0565b610efb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612c4d602c913960400191505060405180910390fd5b610f0a85858585856001612590565b5050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8073ffffffffffffffffffffffffffffffffffffffff16610f7861190d565b73ffffffffffffffffffffffffffffffffffffffff161415610fe5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612b976024913960400191505060405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156110cf576007600061104361190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff021916905561116c565b6001600660006110dd61190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b61117461190d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112685780601f1061123d57610100808354040283529160200191611268565b820191906000526020600020905b81548152906001019060200180831161124b57829003601f168201915b5050505050905090565b61129761127d61190d565b848484604051806020016040528060008152506001612590565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611323576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612c296024913960400191505060405180910390fd5b600061132d61190d565b905061135b818286866040518060200160405280600081525060405180602001604052806000815250611b0c565b611387818286866040518060200160405280600081525060405180602001604052806000815250611e26565b6113b581828686604051806020016040528060008152506040518060200160405280600081525060006121f5565b600191505092915050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614806114d85750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156114d75750600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b5b806115695750600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b905092915050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61160061190d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611684576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612bbb6021913960400191505060405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611777576001600760006116e461190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061180b565b6006600061178361190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690555b61181361190d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b61188061187a61190d565b856113c0565b6118d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612c4d602c913960400191505060405180910390fd5b6118e1848484846126f9565b50505050565b6119096118f261190d565b8383604051806020016040528060008152506126f9565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561199b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180612b076025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180612ceb6023913960400191505060405180910390fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015611bca57600080fd5b505afa158015611bde573d6000803e3d6000fd5b505050506040513d6020811015611bf457600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611e1d578073ffffffffffffffffffffffffffffffffffffffff166375ab97828888888888886040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611d4c578082015181840152602081019050611d31565b50505050905090810190601f168015611d795780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015611db2578082015181840152602081019050611d97565b50505050905090810190601f168015611ddf5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015611e0457600080fd5b505af1158015611e18573d6000803e3d6000fd5b505050505b50505050505050565b611e3286868686612a1b565b611e9d83604051806060016040528060278152602001612b4e602791396000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121359092919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611f30836000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612a2190919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561202557808201518184015260208101905061200a565b50505050905090810190601f1680156120525780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561208b578082015181840152602081019050612070565b50505050905090810190601f1680156120b85780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a48373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050565b60008383111582906121e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121a757808201518184015260208101905061218c565b50505050905090810190601f1680156121d45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b1580156122b357600080fd5b505afa1580156122c7573d6000803e3d6000fd5b505050506040513d60208110156122dd57600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612509578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612434578082015181840152602081019050612419565b50505050905090810190601f1680156124615780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561249a57808201518184015260208101905061247f565b50505050905090810190601f1680156124c75780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b1580156124ec57600080fd5b505af1158015612500573d6000803e3d6000fd5b50505050612586565b81156125855761252e8673ffffffffffffffffffffffffffffffffffffffff16612aa9565b15612584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604d815260200180612bdc604d913960600191505060405180910390fd5b5b5b5050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415612616576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b2c6022913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156126b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433737373a2073656e6420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b60006126c361190d565b90506126d3818888888888611b0c565b6126e1818888888888611e26565b6126f0818888888888886121f5565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561277f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b756022913960400191505060405180910390fd5b600061278961190d565b90506127988186600087612a1b565b6127a781866000878787611b0c565b61281284604051806060016040528060238152602001612cc8602391396000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121359092919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061286984600154612abc90919063ffffffff16565b6001819055508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561290b5780820151818401526020810190506128f0565b50505050905090810190601f1680156129385780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612971578082015181840152602081019050612956565b50505050905090810190601f16801561299e5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a3600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a35050505050565b50505050565b600080828401905083811015612a9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600080823b905060008111915050919050565b6000612afe83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612135565b90509291505056fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f20616464726573734552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a26469706673582212208ec9612ada3b58a4bd4941c169cf26312a6a4f70c1c64a54e1eddaa921935ba364736f6c63430006020033";

type ERC777ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC777ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC777__factory extends ContractFactory {
  constructor(...args: ERC777ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC777";
  }

  deploy(
    name: string,
    symbol: string,
    defaultOperators: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC777> {
    return super.deploy(
      name,
      symbol,
      defaultOperators,
      overrides || {}
    ) as Promise<ERC777>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    defaultOperators: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      defaultOperators,
      overrides || {}
    );
  }
  attach(address: string): ERC777 {
    return super.attach(address) as ERC777;
  }
  connect(signer: Signer): ERC777__factory {
    return super.connect(signer) as ERC777__factory;
  }
  static readonly contractName: "ERC777";
  public readonly contractName: "ERC777";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC777Interface {
    return new utils.Interface(_abi) as ERC777Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC777 {
    return new Contract(address, _abi, signerOrProvider) as ERC777;
  }
}