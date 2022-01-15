import { Wallet, getDefaultProvider, utils } from 'ethers';

import { Fallout__factory } from '../types/ethers-contracts';

const provider = getDefaultProvider("http://localhost:8545");
const testPrivKey = "b883f1ad0edf4e8c7c4619b70d70ab9d02ea762a41c14c95087b943a62c9f865";
const contractAddress = "0xC235C5216910f4488a9261035Cbfc17Ec1051929"

// use the concrete contract factory if you need to operate on the bytecode (ie. deploy)
async function connectContract() {
    return Fallout__factory.connect(contractAddress, provider);
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  console.log(utils.formatEther(await alice.getBalance()));
  connectContract()
    .then(_fallout => {
      const fallout = _fallout.connect(alice);
      fallout.allocate({
        from: alice.address,
        value: 100000,
      }).then(async _ => {
        console.log(utils.formatEther(await fallout.allocatorBalance(alice.address)))
      })
    })
}

main().catch(e => {
  console.log("Error: " + e)
})
