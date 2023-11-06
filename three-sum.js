// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.


function threeSum(nums) {
  let answers = [];
  for (let i=0; i<nums.length; i++) {
    for (let j=i+1; j<nums.length; j++) {
      for (let k=j+1; k<nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          answers.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return answers;
}

// function threeSum(nums) {
//   const twoSumMatrix = [];
//   for (let i=0; i<nums.length; i++) {
//     twoSumMatrix[i] = [];
// 
//     for (let j=i+1; j<nums.length; j++) {
//       twoSumMatrix[i].push(nums[i] + nums[j]);
//     }
//   }
// 
//   let answers = [];
//   for (let k=0; k<twoSumMatrix.length; k++) {
//     const twoSums = twoSumMatrix[k];
//     for (let l=k+1; l<twoSums.length; l++) {
//       for (let m = k + l; m<nums.length; m++) {
//         const third = nums[m];
//         if (twoSums[k][l] + third === 0) {
//           answers.push([nums[k], nums[l], third])
//         }
//       }
//     }
//   }
// }

// function threeSum(nums) {
//   const hash = {}
//   let answers = [];
// 
//   nums.forEach(num => {
//     hash[num] = true;
//   });
// 
//   const keys = Object.keys(hash);
//   for (let i=0; i<keys.length; i++) {
//     for (let j=i+1; j<keys.length; j++) {
//       const num1 = Number(keys[i]);
//       const num2 = Number(keys[j]);
//       const twoSum = num1 + num2;
//       if (hash[-1 * twoSum]) {
//         answers.push([num1, num2, -1 * twoSum]);
//       }
//     }
//   }
// 
//   return answers;
// }

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));

