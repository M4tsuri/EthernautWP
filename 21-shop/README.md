## 21. Shop

和前面的[11. Elevator](../11-elevator)基本一样，只是这次只允许view，因此我们可以使用gas的变化判断是第几次调用：

```
    function price() override external view returns (uint) {
        if (threshold > gasleft()) {
            return 0;
        }
        return 101;
    }
```

这个threshold我是试出来的，但应该也可以算出来，浪费了0.01测试币，阿西吧
