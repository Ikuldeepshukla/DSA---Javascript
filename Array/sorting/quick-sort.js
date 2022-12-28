// implementation of quick sort

const quickSort = (nums) => {
  let min = nums.length - 1;
  //   let minIndex = Number.MAX_VALUE;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    // min = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
    min = nums.length - 1;
  }
  return nums;
};

// driver code
const nums = [8, 4, 3, 5, 0, 9, 1, 11, 22, 12, 18, 14, 19];
console.log(quickSort(nums));
