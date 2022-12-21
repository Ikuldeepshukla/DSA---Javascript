/**
 * 219. Contains Duplicate II
 * https://leetcode.com/problems/contains-duplicate-ii/description
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (i - map.get(nums[i]) <= k) {
        return true;
      } else {
        map.set(nums[i], i);
      }
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};

// driver code
let nums = [1, 0, 1, 1];
console.log(containsNearbyDuplicate(nums, 1));
