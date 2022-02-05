// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract Dispatch {
  uint256 counter;

  function p1() public {
      counter += 1;
  }

  function p2(uint256 a, uint256 b) public {
      counter += a * b;
  }

  function p5() public returns (uint256) {
      counter += 5;
      return counter;
  }
}