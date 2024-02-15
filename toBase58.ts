import * as bs58 from 'bs58';
import * as data from './dev-wallet.json'

function main () {

const byteArray = [
     20,  31,   2, 78,  88, 193,  42,  58, 109, 144, 141,
    200, 180,  77, 25, 255, 189, 129, 244, 121, 253,  32,
     62, 236,  15, 63, 173,  20, 126, 122, 247,  99,  99,
     79,  45,  60, 78,  11, 166, 251,  36, 209,  79, 187,
     67,  70, 238, 79, 170,   7, 178, 111, 105,   3, 177,
    140, 177, 138, 14, 244, 134, 166, 245,  85
  ]
const encoded = bs58.encode(byteArray);
console.log("encoded is: ", encoded);

}


main();
