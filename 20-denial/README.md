## 20. Denial

利用gas进行的拒绝服务攻击。一个external call最多消耗所有gas的63/64，我们只需要耗尽这些gas，同时剩下的gas不足以支撑余下的交易时，就可以进行拒绝服务攻击。为了避免这种攻击，可以使用

```
call{gas:MAX_GAS}
```

来设置调用允许的gas上限。
