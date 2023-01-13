// Demonstrate hashing string with MD5

import crypto from 'crypto';

const payload = 'Hello, guys!';

const hash = crypto.createHash('md5');

hash.update(payload);
const result = hash.digest('hex');
console.log("Hash", result);

// do it once again, but time it
console.time('hash');
for (let i = 0; i < 200; i++) {
  const hash = crypto.createHash('md5');
  hash.update(payload);
  hash.digest('hex');
}
console.timeEnd('hash');
