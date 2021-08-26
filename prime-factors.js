function primeFactors(num) {
  let divisible = num;
  let factors = [];
  for (let i=2; i<=Math.floor(num / 2); i++) {
    while (divisible % i === 0) {
      divisible = divisible / i;
      factors.push(i);
    }
  }
  return factors
}

let n;

n = 4;
console.log('Prime factors of ', n, primeFactors(n));

n = 5;
console.log('Prime factors of ', n, primeFactors(n));

n = 6;
console.log('Prime factors of ', n, primeFactors(n));

n = 7;
console.log('Prime factors of ', n, primeFactors(n));

n = 8;
console.log('Prime factors of ', n, primeFactors(n));

n = 11;
console.log('Prime factors of ', n, primeFactors(n));

n = 15;
console.log('Prime factors of ', n, primeFactors(n));

n = 21;
console.log('Prime factors of ', n, primeFactors(n));

n = 29;
console.log('Prime factors of ', n, primeFactors(n));

n = 35;
console.log('Prime factors of ', n, primeFactors(n));

n = 123456789;
console.log('Prime factors of ', n, primeFactors(n));
