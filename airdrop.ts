import { Connection, Keypair, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";
import wallet from "./dev-wallet.json";


const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const devnet = clusterApiUrl('devnet')
const connection = new Connection(devnet);

async function main () {
   console.log(`this is the public key ${keypair.publicKey}`)
   try {
     const txHash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
     console.log(`Success, tx is here: ${txHash}`);
   } catch (e) {
     console.log(`Oops something went wrong ${e}`);
   }

}

main();
