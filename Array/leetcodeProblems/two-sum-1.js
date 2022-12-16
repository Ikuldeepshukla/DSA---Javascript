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

// second approach usng inbuild function - indexOf()
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  if(nums.length < 2){
      return [];
  }
  else{
      for(let i = 0; i < nums.length; i++){
          let firstNum = nums[i];
          let secondNum = target - firstNum;
          let secIndex = nums.indexOf(secondNum);
          if(secIndex !== -1 && secIndex !== i){
              return [i, secIndex];
          }    
      }
  }
};

console.log(twoSum(nums, target));
