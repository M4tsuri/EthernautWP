import { JsonRpcProvider, getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';

import { Attack__factory } from '../types/ethers-contracts';

const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
const phone = "0xC498e98B6ED4fF04c3B850714Bc4b1D4EcB9de63"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);

  const factory = new Attack__factory(alice);
  factory.deploy()
    .then(attack => {
      attack.attack(phone)
    })

}

main().catch(e => {
  console.log("Error: " + e)
})
