## 3. Coin Flip

本题难度显著上升，因为以往的off-chain交易方式不能再应用到这一题上。

使用下面代码尝试调用合约中的flip，我们并没能得到函数的返回值：

```ts
async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  console.log(utils.formatEther(await alice.getBalance()));
  const coin = CoinFlip__factory.connect(contractAddress, provider).connect(alice);

  coin.flip(true)
    .then(res => console.log(res))
}
```

为了弄清楚发生了什么，我们首先需要学习一些前置知识。

### On-Chain与Off-Chain



程序的脆弱点在于将当前区块序号的hash作为随机数，但实际上这并不是一个可信的随机数。因为攻击者在一定情况下可以控制区块号的hash，例如发出大量高gas的请求使交易被优先接收并放在可预测的区块中。



