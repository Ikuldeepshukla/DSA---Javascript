// leetcode - https://leetcode.com/problems/two-sum/

// brootforce approach - O(n2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumBrootforce = function (nums, target) {
  let v1 = 0,
    v2 = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        v1 = i;
        v2 = j;
        break;
      }
    }
  }
  return [v1, v2];
};

// optimized approach
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {};
