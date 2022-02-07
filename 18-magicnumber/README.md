## 18. MagicNumber

使用汇编构建合约和合约部署代码即可，合约代码如下：

```
      mstore8(31, 42)
      return(0, 32)
```

根据ABI的要求，返回值应当32位对齐，不足的在高位补0。

然后部署该合约即可。部署方式见[`./play/src/index.ts`](./play/src/index.ts)
