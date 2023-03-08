// Kth Largest Element in an Array
// leetcode - https://leetcode.com/problems/kth-largest-element-in-an-array/description/

const findKthLargest = function (nums, k) {
  // sort the number
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};

// driver code
let nums = [2, 5, 4, 3, 1, 9, 8, 5, 0, 5];
let k = 4;

console.log(findKthLargest(nums, k));
