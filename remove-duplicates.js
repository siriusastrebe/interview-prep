// How do you remove duplicates from an array in place?
function removeDuplicates(arr) {
  let i = 0;
  let j = 0;
  let seen = {}

  while (j < arr.length) {
    if (seen[arr[j]]) {
      j++;
    } else {
      seen[arr[j]] = true;
      arr[i] = arr[j];
      i++;
      j++;
    }
  }
  arr.length = i;
  return arr;
}

const a1 = [1, 1, 2, 2, 3, 4, 5]
console.log('Removing duplicates from ', a1, removeDuplicates(a1.slice()));


const a2 = [1, 1, 1, 1, 1, 1, 1]
console.log('Removing duplicates from ', a2, removeDuplicates(a2.slice()));


const a3 = [1, 2, 3, 4, 5, 6, 7]
console.log('Removing duplicates from ', a3, removeDuplicates(a3.slice()));


const a4 = [1, 2, 1, 1, 1, 1, 1]
console.log('Removing duplicates from ', a4, removeDuplicates(a4.slice()));
