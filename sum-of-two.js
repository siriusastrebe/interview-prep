// How do you find all pairs of an integer array whose sum is equal to a given number?

// You could sort the array, then find value closest to half of the given number, then
// check ascending items to descending items, summing them to see if their number equals the given.
// This would be o(n logn) time for the sorting, and o(n) for the comparisons.

// Another strategy would be to keep an auxiliary hashmap of seem values
// The second pass, compare each value to the subtracted value in the hashmap.
// Using a hash map with seen values as keys, comparison would be o(1). Time would be o(n), space o(n);
function sumOfTwo(arr, target) {
  const seen = {}
  arr.forEach((n) => {
    seen[n] = true;
  });

  const sums = arr.filter((n) => {
    if (seen[target - n]) {
      return true
    }
  });

  return sums.map(n => [n, target - n]);
}

let arr = [];
let target = Math.floor(Math.random() * 160);
for (let i=0; i<100; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.log('sums to', target, sumOfTwo(arr, target));
