// Find the median of two sorted arrays

function median(arr1, arr2) {
  let i = -1; 
  let j = -1;

  let current;
  let previous;

  while (i+j < (arr1.length + arr2.length - 2) / 2) {
    previous = current;
    if (j === arr2.length - 1 || arr2[j+1] > arr1[i+1]) {
      i++;
      current = arr1[i];
    } else {
      j++;
      current = arr2[j];
    }
  }

  if ((arr1.length + arr2.length) % 2 === 0) {
    // Even length lists, take the arithmetic mean of the two median values
    return (previous + current) / 2;
  } else {
    return previous;
  }
}


//const arr1 = [1, 2, 3]
//const arr2 = [2, 2, 4, 5]

let arr1 = [0, 0, 19]
let arr2 = [2, 3, 4];

console.log('Median of ', arr1, arr2, median(arr1, arr2));


arr1 = [1]
arr2 = [9]
console.log('Median of ', arr1, arr2, median(arr1, arr2));

arr1 = [1, 2]
arr2 = [9]
console.log('Median of ', arr1, arr2, median(arr1, arr2));
