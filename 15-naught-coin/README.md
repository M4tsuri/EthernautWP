## 15. Naught Coin

合约不让transfer，审计源码，用其他函数达成同样的目的就可以了：

```js
await contract.approve(player, await contract.balanceOf(player))
await contract.transferFrom(player, "<any address>", await contract.balanceOf(player))
```

