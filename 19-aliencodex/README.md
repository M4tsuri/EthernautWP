## 19. Alien Codex

这一题比较有意思，也是一个内存破坏类漏洞。首先，根据ABI的描述，该合约的存储空间布局如下（序号为slot编号）：

```
0x00: address _owner || bool contact
0x01: length of codex
keccak256(0x02): data of codex
```

因此我们可以进行如下操作来达成任意地址写：

1. 使`codex.length`下溢出到UINT256_MAX
2. 要写入slot `s`时，使用`codex[s + (UINT256_MAX - keccak256(0x02) + 1)]`访问该slot

可惜这种洞只能在老版本solc看到了，现在数组的长度是只读的，同时0.8.0之后整数溢出会报错。

