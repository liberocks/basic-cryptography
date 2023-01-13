import { generateKey, encrypt, decrypt } from "./symmetric-lib.js";

const key = generateKey();

const obj = { "hello": "world" };

const encrypted = encrypt(obj, key);
const decrypted = decrypt(encrypted, key);

console.log("Key", key);
console.log("Object", obj);
console.log("Encrypted", encrypted);
console.log("Decrypted", decrypted);