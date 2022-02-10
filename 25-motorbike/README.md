## 24. Puzzle Wallet

这个题目较为复杂，首先，我们需要明确目标，即获取proxy的admin身份，观察可以发现proxy中的storage布局和wallet中的布局存在重叠，即变量覆盖。其中

- `PuzzleProxy.pendingAdmin`与`PuzzleWallet.owner`重叠
- `PuzzleProxy.admin`与`PuzzleWallet.maxBalance`重叠

同时`PuzzleProxy`会将unmatched function call使用delegatecall proxy到`PuzzleWallet`。这意味着我们可以通过在`PuzzleWallet`中修改`maxBalance`来劫持proxy的admin。

因此我们有下面思路：

1. 使用攻击者账户作为参数调用`PuzzleWallet.setMaxBalance` <-
2. 需要首先保证`getBalance(PuzzleWallet) == 0` <-
3. 取走wallet的钱需要保证攻击者在其中存有钱，并且金额不小于钱包余额 <-
4. 调用`PuzzleWallet.deposit`为攻击者存钱，但是存钱的同时钱也会进入到钱包余额中，因此要想办法欺骗合约让合约认为的存的钱大于实际存的钱 <-
5. 由于在delegatecall的调用上下文中，`msg.value`总是保持不变，同时没有实际的转账行为，我们可以在一个delegatecall上下文环境中多次调用deposit <-
6. 上述步骤可以通过`multicall`来完成，但是该函数对调用deposit的次数进行了判断 <-
7. `multicall`存在重入性问题，可以利用该问题绕过校验

在上面的思路的指导下，我们很容易写出攻击合约。

