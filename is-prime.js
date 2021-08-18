// Write a function that returns true if a number is prime, and false if it's not a prime

function isPrime(num) {
  if (num < 2) {
    return false
  }

  let divisible = false;
  for (let i=2; i<=Math.floor(num/2); i++) {
    if (Number.isInteger(num / i)) {
      return false
    }
  }
  return true;
}

let s;
s = 2
console.log(s, ' is prime: ', isPrime(s));

s = 3
console.log(s, ' is prime: ', isPrime(s));

s = 4
console.log(s, ' is prime: ', isPrime(s));

s = 5
console.log(s, ' is prime: ', isPrime(s));

s = 6
console.log(s, ' is prime: ', isPrime(s));

s = 7
console.log(s, ' is prime: ', isPrime(s));

s = 8
console.log(s, ' is prime: ', isPrime(s));

s = 9
console.log(s, ' is prime: ', isPrime(s));

s = 10
console.log(s, ' is prime: ', isPrime(s));

s = 11
console.log(s, ' is prime: ', isPrime(s));

s = 16
console.log(s, ' is prime: ', isPrime(s));

s = 17
console.log(s, ' is prime: ', isPrime(s));

s = 23
console.log(s, ' is prime: ', isPrime(s));


s = 1223
console.log(s, ' is prime: ', isPrime(s));


s = 1227
console.log(s, ' is prime: ', isPrime(s));

s = 7919
console.log(s, ' is prime: ', isPrime(s));