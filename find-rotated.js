// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
// 
//     [4,5,6,7,0,1,2] if it was rotated 4 times.
//     [0,1,2,4,5,6,7] if it was rotated 7 times.
// 
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// 
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// 
// You must write an algorithm that runs in O(log n) time.


function findRotation(arr, left, right) {
  left = left || 0 
  right = right || arr.length - 1;
  const mid = Math.floor((left + right) / 2);

  if (left === mid) {
    return arr.length;
  }


  if (arr[left] > arr[mid]) {
    if (left === mid - 1) {
      return mid;
    } else {
      return findRotation(arr, left, mid);
    }
  } else {
    return findRotation(arr, mid, right);
  }
}

console.log(findRotation([4,5,6,7,0,1,2]));
console.log(findRotation([3,4,5,1,2]));
console.log(findRotation([4,5,6,7,0,1,2]));
console.log(findRotation([11,13,15,17]));
