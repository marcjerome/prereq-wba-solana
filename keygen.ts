import { Keypair } from "@solana/web3.js";


// gen key pair
let kp = Keypair.generate();
console.log(`You've generated a new Solana Wallet: ${kp.publicKey.toBase58()}`);

console.log(`This is your private key: ${kp.secretKey}`)
