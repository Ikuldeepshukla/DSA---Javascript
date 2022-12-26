// implementation of bubble sort

const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

// driver code
const nums = [2, 1, 5, 7, 9, 3, 4, 10, 6, 8, 11];
console.log(bubbleSort(nums));
