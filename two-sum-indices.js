// return indices of the two numbers such that they add up to target
// You may assume that each input would have exactly one solution, and you may not use the same element twice
// You can return the answer in any order

// You'd need to store the indices of each value in an key/value object, otherwise you're scanning the array in N^2 which we want to avoid.

function twoSum(nums, target) {
    // return indices of the two numbers such that they add up to target
    let indexByValue = {};
    nums.forEach((num, i) => {
        if (indexByValue[num] === undefined) {
            indexByValue[num] = [i];
        } else {
            indexByValue[num].push(i);
        }
    });
  
    for (let i=0; i<=Math.ceil(target/2); i++) {
        if (indexByValue[target - i] !== undefined && indexByValue[i] !== undefined) {
           const firstIndices = indexByValue[target - i];
           const firstIndex = firstIndices.splice(0, 1)[0]
           const secondIndex = indexByValue[i][0];
           return [firstIndex, secondIndex];
        }
    }
};
 
let nums = [2,7,11,15]; 
let target = 9;
console.log(twoSum(nums, target));

nums = [3,2,4]; 
target = 6;
console.log(twoSum(nums, target));

nums = [3,3];
target = 6;
console.log(twoSum(nums, target));
