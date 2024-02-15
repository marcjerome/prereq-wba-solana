import { Transaction, SystemProgram, Connection, Keypair, LAMPORTS_PER_SOL, clusterApiUrl, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";
import wallet from "./dev-wallet.json";

const from = Keypair.fromSecretKey(new Uint8Array(wallet));

const to = new PublicKey("4DJDaaL9Q8qMxzJ74F9FJyzwRWPaHnQgJ1NkmRcsZZxj");


const devnet = clusterApiUrl('devnet');
const connection = new Connection(devnet);

async function main () {

 try {

   const balance = await connection.getBalance(from.publicKey);

   const instruction = SystemProgram.transfer({
     fromPubkey: from.publicKey,
     toPubkey: to,
     lamports: LAMPORTS_PER_SOL/100
   });
   const transaction = new Transaction().add(instruction);


   transaction.recentBlockhash = (await connection.getLatestBlockhash('confirmed')).blockhash;
   transaction.feePayer = from.publicKey;

   const fee = (await connection.getFeeForMessage(transaction.compileMessage(), 'confirmed')).value || 0;

   transaction.instructions.pop();


   transaction.add(
     SystemProgram.transfer({
       fromPubkey: from.publicKey,
       toPubkey: to,
       lamports: balance - fee,
     })
   );
   const signature = await sendAndConfirmTransaction(connection, transaction, [from]);

   console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
 } catch (e) {

   console.log(`Oops , something went wrong: ${e}`);
 }

}

main();
