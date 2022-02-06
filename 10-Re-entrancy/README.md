## 10. Re-entrancy

看题目名称就是一道关于可重入性的题目，题目中的`withdraw`不是重入安全的，由于该函数依赖于状态`balances`进行判断，它就应该在调用其他函数之前完成对`balances`的更新，否则攻击者可以将控制流再次引向`withdraw`函数，个人认为这种攻击方式在思维模式上类似于经典漏洞类型中的TOCTOU漏洞：

```
  function withdraw(uint _amount) public {
    // Time of check
    if(balances[msg.sender] >= _amount) {
      // State Change
      (bool result,) = msg.sender.call{value:_amount}("");
      if(result) {
        _amount;
      }
      // Time of use
      balances[msg.sender] -= _amount;
    }
  }
```

