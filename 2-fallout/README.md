## 2. Fallout

所谓的构造函数

```sol
  /* constructor */
  function Fal1out() public payable {
    owner = msg.sender;
    allocations[owner] = msg.value;
  }
```

实际上就是一个普通的函数，合约构造完成后也可以调用，攻击者可以调用该函数修改合约敏感的内部状态。

实际上solidity中的构造函数语法参见 https://docs.soliditylang.org/en/v0.8.10/contracts.html#constructor 例如：

```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

abstract contract A {
    uint public a;

    constructor(uint _a) {
        a = _a;
    }
}

contract B is A(1) {
    constructor() {}
}
```

其中的constructor中对应的代码只会在合约被部署时执行一次，

本题中合约没有实现constructor，因此其构造函数默认为空。
