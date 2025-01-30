const a = [1,2,3,1]; // output 4
const b = [2,7,9,3,1] // output 12

var rob = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]); 
  }
  if (nums.length === 3) {
    return Math.max(nums[0] + nums[2], nums[1]);
  }
  if (nums.length > 3) {
    return Math.max(nums[0] + nums[2] + rob(nums.slice(4), nums[1] + nums[3] + rob(nums.slice(5))))
  }
};

console.log(rob(a));
console.log(rob(b));
