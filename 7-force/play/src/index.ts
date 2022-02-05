import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { parse, assemble } from "@ethersproject/asm"
// const provider = getDefaultProvider("HTTP://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  
  alice.sendTransaction({
    to: undefined,
    data: assemble(parse('suicide(0x76aE4F1030BA0FeC76ECE4A891Ca1e5F444CD53C)'), {
      target: "_"
    }),
    value: toWei(0.0001),
    gasLimit: 100000,
  }).then(res => {
    console.log(res)
  })

}

main().catch(e => {
  console.log("Error: " + e)
})
