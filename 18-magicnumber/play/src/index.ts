import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet, utils } from 'ethers';
import { readFileSync } from 'fs-extra';
import { assemble, parse } from "@ethersproject/asm";
import path from 'path/posix';
import { Attack__factory } from '../types/ethers-contracts';
import { arrayify, getContractAddress } from 'ethers/lib/utils';
import { Verify__factory } from '../types/ethers-contracts/factories/Verify__factory';

// import {  } from '../types/ethers-contracts';

// const provider = getDefaultProvider("http://127.0.0.1:8545");
const provider = getDefaultProvider("rinkeby");
const testPrivKey = readFileSync(path.resolve(__dirname, "./../../../.privkey")).toString().trim();
// const testPrivKey = "";

function toWei(eth: number) {
  return utils.parseEther(eth.toString())
}

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);

  const contract_code = await assemble(
    parse(`
      mstore8(31, 42)
      return(0, 32)
    `), 
    {
      target: "_",
    }
  )

  const deploy_template = await assemble(
    parse(`
      codecopy(0, 0, 0)
      return(0, 0)
    `), 
    {
      target: "_"
    }
  )

  const deploy_code = await assemble(
    parse(`
      codecopy(0, ${arrayify(deploy_template).length}, ${arrayify(contract_code).length})
      return(0, ${arrayify(contract_code).length})
    `), 
    {
      target: "_"
    }
  )

  const attack_addr = getContractAddress({
    from: alice.address,
    nonce: await alice.getTransactionCount()
  })

  await alice.sendTransaction({
    to: undefined,
    data: deploy_code + contract_code.slice(2),
    gasLimit: 1000000
  }).then(async _ => {
    console.log("Addr: " + attack_addr)
    console.log(await provider.getCode(attack_addr));
    (new Verify__factory(alice)).deploy().then(async verify => {
      console.log(await verify.verify(attack_addr))
    })
  })
}

main().catch(e => {
  console.log("Error: " + e)
})
