## 16. Preservation

`delegatecall`引起的内存破坏漏洞，劫持对象指针从而达成在目标账户storage上的任意代码执行。注意为了保持attacker和victim的存储布局一致，我们刻意使attacker合约中的变量声明（定义）和victim的完全一致。

关于`delegatecall`的详细介绍，参见 https://dere.press/2022/01/30/contract-call/#delegatecall-yu-callcode
