import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils, ethers } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';

import { Vault__factory } from '../types/ethers-contracts';

// const provider = getDefaultProvider("HTTP://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0x7Ba2c19cC75AA18F361D22CbF51ce010D462FF41"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  const vault = Vault__factory.connect(addr, provider).connect(alice);
  const password = await provider.getStorageAt(addr, 1);
  vault.unlock(password).then(res => {
    console.log(res)
  })
}

main().catch(e => {
  console.log("Error: " + e)
})
