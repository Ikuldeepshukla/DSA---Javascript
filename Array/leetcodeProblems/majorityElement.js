/**
 * majoritElement problem - https://leetcode.com/problems/majority-element
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let pair = new Map();
  let result = 0;
  let tempVal = 0;
  for (let i = 0; i < nums.length; i++) {
    if (pair.has(nums[i])) {
      let temp = pair.get(nums[i]);
      pair.set(nums[i], temp + 1);
    } else {
      pair.set(nums[i], 1);
    }
  }
  pair.forEach((value, key) => {
    if (tempVal < value) {
      result = key;
      tempVal = value;
    }
  });
  return result;
};
let nums = [3, 2, 3];
console.log(majorityElement(nums));
