import tweetnacl from 'tweetnacl';

const { box } = tweetnacl;

import { generateKeyPair, encrypt, decrypt } from './asymmetric-lib.js'

const obj = { hello: 'world' };

const pairA = generateKeyPair(); // Alice
const pairB = generateKeyPair(); // Bob


const sharedA = box.before(pairB.publicKey, pairA.secretKey); // deriveable by the combinations priv and pubc
const sharedB = box.before(pairA.publicKey, pairB.secretKey);

const encrypted = encrypt(sharedA, obj);
const decrypted = decrypt(sharedB, encrypted);

console.log("Object", obj);
console.log("Pair A", pairA);
console.log("Pair B", pairB);
console.log("Shared A", sharedA);
console.log("Shared B", sharedB);
console.log("Encrypted", encrypted);
console.log("Decrypted", decrypted);
