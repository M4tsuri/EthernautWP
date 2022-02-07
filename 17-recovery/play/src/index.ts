import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { SimpleToken__factory } from '../types/ethers-contracts';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const token_addr = "0xEfB5d944e79b36a76aaD9b9eE52c043f0f77C93D"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  const token = SimpleToken__factory.connect(token_addr, provider).connect(alice)
  console.log(await token.balances(alice.address))
  console.log(await token.destroy(alice.address))
}

main().catch(e => {
  console.log("Error: " + e)
})
