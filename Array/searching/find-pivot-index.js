/**
 * first method - O(n)
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let pivot = -1;
  let total = 0;
  let lsum = 0;
  let rsum = 0;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  rsum = total;
  while (lsum !== rsum && index < nums.length) {
    if ((total - nums[index]) / 2 == lsum) {
      return index;
    }
    lsum += nums[index];
    index++;
  }
  return pivot;
};

let nums = [-1, -1, 0, 1, 0, -1];
console.log(pivotIndex(nums));

/**
 * second method - O(n)
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  var sum = nums.reduce((num, curr, index) => num + curr, 0);
  var currsum = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((sum - nums[i]) / 2 == currsum) {
      return i;
    }
    currsum += nums[i];
  }
  return -1;
};
