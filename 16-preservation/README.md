## 16. Preservation

`delegatecall`引起的内存破坏漏洞，劫持对象指针从而达成在目标账户storage上的任意代码执行。注意为了保持attacker和victim的存储布局一致，我们刻意使attacker合约中的变量声明（定义）和victim的完全一致。

关于`delegatecall`的详细介绍，参见 https://dere.press/2022/01/30/contract-call/#delegatecall-yu-callcode

Solidity提供了对`delegatecall`的该安全问题的一个解决方案，即使用Library关键词定义shared behavior，这些代码可以被作为库部署到链上，库具有如下特点：

1. 库函数只能修改caller的storage，并且该storage必须在库的源码中显式声明（只是概念性的，推测使用内联汇编即可绕过编译期检查）
2.  只有`view`以及`pure`能被直接调用，这意味着库永远不会到达不可用状态（因为它压根不会修改/没有自己的状态）
3. 库中的`internal`函数会在编译时被插入到调用它的合约中，然后按照合约内函数调用处理
4. 合约调用库函数时，使用`delegatecall`进行调用

例如下面的合约：

```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.14 <0.9.0;

library L {
    function f(uint256) external {}
}

contract C {
    function g() public pure returns (bytes4) {
        return L.f.selector;
    }
}
```

反编译库代码，可以看到函数选择器如下：

```
contract Contract {
    function main() {
        // deploy code will change the series of 00 to the actual address of this contract
        var var0 = address(this) == 0x0000000000000000000000000000000000000000;
        memory[0x40:0x60] = 0x80;
    
        if (msg.data.length < 0x04) { revert(memory[0x00:0x00]); }
    
        var var1 = msg.data[0x00:0x20] >> 0xe0;
    
        // check function signature
        if (var1 != 0xb3de648b) { revert(memory[0x00:0x00]); }
    
        var var2 = var0;

        // check if current function is directly called
        if (var2) { revert(memory[0x00:0x00]); }
    
        var2 = 0x5a;
        var var3 = 0x56;
        var var4 = msg.data.length - 0x04 + 0x04;
        var var5 = 0x04;
        var3 = func_0095(var4, var5);
        func_0056(var3);
        stop();
    }
    ...
}
```
