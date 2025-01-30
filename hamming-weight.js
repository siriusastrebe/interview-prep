// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

const a = 11; // 1011 has a hamming weight of 3
const b = 128; // The input binary string 10000000 has a total of one set bit.
const c = 2147483645; // The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

function hammingWeight(n) {
  if (n === 0) {
    return 0;
  }
  let divisor = 1;
  while (divisor * 2 <= n) {
    divisor = divisor * 2;
  }
  const remainder = n - divisor; 
  if (remainder === 0) {
    return 1;
  } else {
    return 1  + hammingWeight(remainder);
  }
}

console.log(hammingWeight(a));
console.log(hammingWeight(b));
console.log(hammingWeight(c));
