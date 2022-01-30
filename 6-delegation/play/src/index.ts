import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';

import { Delegation__factory, Delegate, Delegate__factory } from '../types/ethers-contracts';

// const provider = new JsonRpcProvider("HTTP://127.0.0.1:8545");
const addr = "0x45F286c595E4D32Eea825F483d02EDc82DBf775f"
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice.connect(provider);
  const inter = Delegate__factory.createInterface();
  const calldata = inter.encodeFunctionData("pwn")
  

  

}

main().catch(e => {
  console.log("Error: " + e)
})
