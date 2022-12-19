/**
 * check if an array contains duplicate, return true or false
 * @param {number[]} nums
 * @return {boolean}
 */

// first method
const containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// second method
// const containsDuplicate = function (nums) {
//   let numMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (numMap.has(nums[i])) {
//       return true;
//     } else {
//       numMap.set(nums[i], 1);
//     }
//   }
//   return false;
// };

// third method
// const containsDuplicate = function (nums) {
//   let set = new Set(nums);
//   return nums.length != set.size;
// };

// driver code
let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
