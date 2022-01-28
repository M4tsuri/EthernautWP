import { Wallet, getDefaultProvider } from 'ethers';
import { readFileSync } from 'fs';
import path from 'path/posix';

const provider = getDefaultProvider("http://127.0.0.1:8545");
const testPrivKey = "b883f1ad0edf4e8c7c4619b70d70ab9d02ea762a41c14c95087b943a62c9f865"
const code = readFileSync(path.resolve(__dirname, "./contracts/call_sol_Call.bin")).toString().trim()

async function main() {
  let alice = new Wallet(testPrivKey);
  alice = alice.connect(provider);
  
  await alice.sendTransaction({
      to: undefined,
      gasLimit: 1000000,
      data: "0x" + code,
      value: 0,
  })
}

main()
