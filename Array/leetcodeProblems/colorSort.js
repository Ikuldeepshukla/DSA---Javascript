/** Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

problem - https://leetcode.com/problems/sort-colors/description/ - medium

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  solution using bubble sort
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
};

let nums = [0, 1, 1, 2, 0, 1];
sortColors(nums);
