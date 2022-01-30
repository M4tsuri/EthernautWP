// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract Dispatch {
  uint256 counter;

  function p1() public {
      counter += 1;
  }

  function p2() public {
      counter += 2;
  }

  function p3() public {
      counter += 3;
  }

  function p4() public {
      counter += 4;
  }

  function p5() public {
      counter += 5;
  }
}