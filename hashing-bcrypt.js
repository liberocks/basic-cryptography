// Demonstrate hashing password with scrypt. Use ES6 syntax. Use module instead of require.

import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);
const password = "Hello, World!"
const hashed_password = bcrypt.hashSync(password, salt);

console.log("Hashed Password", hashed_password)

// do it once again, but time it
console.time('hash');
for (let i = 0; i < 200; i++) {
  bcrypt.hashSync(password, salt);
}
console.timeEnd('hash');