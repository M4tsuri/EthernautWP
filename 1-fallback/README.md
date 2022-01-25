## 1. Fallback

### fallback方法

合约中的方法

```sol
  receive() external payable {
    require(msg.value > 0 && contributions[msg.sender] > 0);
    owner = msg.sender;
  }
```

是一个fallback方法，向合约发送的请求找不到相应的方法时会调用该方法。合约处理transaction时会判断对方调用的是哪个方法，如果找不到方法名，那么合约将会寻找是否存在一个fallback方法，这个方法在solidity 0.6之前是一个没有函数名的方法：

```sol
function() external [payable]
```

注意当合约中不存在任何fallback方法时，向其发送调用了无效函数（或data为空）的请求会触发异常，交易将会被revert。但有两种情形例外

1. 交易来自selfdestruct调用，参见 https://github.com/M4tsuri/ETHacks/tree/main/selfdestruct
2. 交易来自挖矿奖励（coinbase transaction）

在solidity 0.6之后，fallout函数变成了两个，其中一个专门被用于接收付款：

```sol
receive() external payable
```

它的原型必须如上面所示，当transaction data为空时，该函数将会被调用。

当该函数没有实现或者transaction data不会空，合约仍然调用没有名字的fallback函数，但其原型变为

```sol
fallback (bytes calldata _input) external [payable] returns (bytes memory _output)
```

此时该fallback可以对交易数据进行处理，也可以返回字节数据。

**对于一个没有实现receive和fallback的合约，使用常规方式转账将会抛出异常，交易会被revert**

### 题解

1. contribute使自己的contribution大于0
   ```js
   await contract.contribute.sendTransaction({"from": player, "value": toWei("0.0005")})
   ```
2. 发送交易，触发fallback方法：
   ```js
   await sendTransaction({"from": player, "to": contract.address, "value": 1})
   ```
3. 提款
