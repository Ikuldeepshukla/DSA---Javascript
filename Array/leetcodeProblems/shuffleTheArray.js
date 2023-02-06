/** Shuffle the Array - https://leetcode.com/problems/shuffle-the-array/description/
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
  let i = 0;
  let j = nums.length / 2;
  let result = [];
  while (j < nums.length) {
    result.push(nums[i++]);
    result.push(nums[j++]);
  }
  return result;
};

let nums = [2,5,1,3,4,7], n = 3;

console.log(shuffle(nums, n));