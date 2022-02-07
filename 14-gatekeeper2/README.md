## 14. Gatekeeper Two

这题有趣的一点在于这一关：

```
  modifier gateTwo() {
    uint x;
    assembly { x := extcodesize(caller()) }
    require(x == 0);
    _;
  }
```

要求账户代码size为0，由于创建合约时会先执行部署代码（init），此时合约账户尚且没有代码，因此在部署代码中调用该合约即可。构造函数常常是部署代码的一部分，因此把攻击逻辑写在构造函数中即可。

另外，这个写法：

```
  modifier gateThree(bytes8 _gateKey) {
    require(uint64(bytes8(keccak256(abi.encodePacked(msg.sender)))) ^ uint64(_gateKey) == uint64(0) - 1);
    _;
  }
```

在solidity 0.8.0以上版本中会报错，参见 https://solidity-by-example.org/hacks/overflow/
