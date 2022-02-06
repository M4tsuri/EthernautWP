## 13. Gatekeeper One

说难也不难，就把几个条件过了就行，意思很简单，但这个限制条件很恶心：

```
  modifier gateTwo() {
    require(gasleft().mod(8191) == 0);
    _;
  }
```

这个剩余gas需要凑出来符合条件的。因为编译期版本问题本地死活搞不出来，最后直接吧rinkeby fork了一份调试，终于调出来了。

```sh
ganache-cli --accounts 10 --defaultBalanceEther 10000000000000 --hardfork istanbul --fork https://rinkeby.infura.io/v3/<api> --gasLimit 12000000 --mnemonic brownie --port 8545 --chain.chainId 1
```

