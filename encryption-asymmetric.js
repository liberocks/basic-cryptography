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

const toHexString = (bytes) =>
  bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
const fromHexString = (hexString) =>
  Uint8Array.from(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));


console.log("Object", obj);
console.log("Pair A", pairA);
console.log("Pair A public key hex", toHexString(pairA.publicKey));
console.log("Pair A public key", fromHexString(toHexString(pairA.publicKey)));
console.log("Pair B", pairB);
console.log("Shared A", sharedA);
console.log("Shared B", sharedB);
console.log("Encrypted", encrypted);
console.log("Decrypted", decrypted);
