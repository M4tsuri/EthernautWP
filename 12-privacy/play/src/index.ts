import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { arrayify } from 'ethers/lib/utils';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';

import { Privacy__factory } from '../types/ethers-contracts';

// const provider = getDefaultProvider("HTTP://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0x26934DcEA46C7cb14B2149E15b0b0F0654Ca0d77"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  const privacy = Privacy__factory.connect(addr, provider).connect(alice)
  const key = arrayify(await provider.getStorageAt(addr, 5)).slice(0, 16);

  privacy.unlock(key).then(() => console.log("done"))
}

main()
