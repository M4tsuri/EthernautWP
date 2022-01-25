## selfdestruct带来的安全问题

selfdestruct的参数是一个payable address，其作用是将当前合约摧毁，并将余额打到参数指定的地址中。当一个合约调用selfdestruct时，无论指定地址是否是常规账户，**无论合约账户是否实现了receive/fallback**，都会将余额转过去。因此在编写合约时依赖`address(this).balance`可能会带来逻辑漏洞。

我们复现了 https://solidity-by-example.org/hacks/self-destruct/ 中提出的漏洞并编写代码成功利用，结果如下：

![](../screenshots/selfdesturct.png)

