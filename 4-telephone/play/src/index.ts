import { JsonRpcProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';

// import {  } from '../types/ethers-contracts';

const provider = new JsonRpcProvider("HTTP://127.0.0.1:8545");

const testPrivKey = "";

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice.connect(provider);

}

main().catch(e => {
  console.log("Error: " + e)
})
