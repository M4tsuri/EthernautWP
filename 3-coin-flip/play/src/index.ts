import { Wallet, getDefaultProvider, utils } from 'ethers';

import { CoinFlip__factory } from '../types/ethers-contracts';

const provider = getDefaultProvider("http://localhost:8545");
const testPrivKey = "b883f1ad0edf4e8c7c4619b70d70ab9d02ea762a41c14c95087b943a62c9f865";
const contractAddress = "0x978014Ca99eCE3242Be6762Dd66CD57D2271bc07"

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  
  /*
  console.log(utils.formatEther(await alice.getBalance()));
  const coin = CoinFlip__factory.connect(contractAddress, provider).connect(alice);

  coin.flip(true)
    .then(res => console.log(res))*/
}

main().catch(e => {
  console.log("Error: " + e)
})
