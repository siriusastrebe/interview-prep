// How do you convert a sorted array into a binary search tree

function toBinaryTree(arr, start, end) {
  if (start === undefined) start = 0;
  if (end === undefined) end = arr.length-1;

  if (start === end) {
    return {value: arr[start], left: null, right: null}
  }

  const median = Math.ceil((end + start) / 2);

  let left;
  let right;

  left = toBinaryTree(arr, start, median-1)

  if (median+1 <= end) {
    right = toBinaryTree(arr, median+1, end)
  } else {
    right = null;
  }
   
  console.log(start, median, end);

  return {value: arr[median], left: left, right: right}
}

let s;
s = [0, 1, 2, 3, 4, 5, 6]
console.log('To binary tree: ', s, JSON.stringify(toBinaryTree(s)));

s = [1, 2, 3]
console.log('To binary tree: ', s, JSON.stringify(toBinaryTree(s)));

s = [1, 2, 3, 4]
console.log('To binary tree: ', s, JSON.stringify(toBinaryTree(s)));

s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('To binary tree: ', s, JSON.stringify(toBinaryTree(s)));
