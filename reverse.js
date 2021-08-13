// How do you reverse an array in place?

function reverse(arr) {
  let tmp
  for (let i=0; i<Math.floor(arr.length / 2); i++) {
    tmp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('Reversing', a1, reverse(a1.slice()));

const a2 = [99, 98, 97, 96, 0, 1, 2, 3]
console.log('Reversing', a2, reverse(a2.slice()));

const a3 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log('Reversing', a3, reverse(a3.slice()));
