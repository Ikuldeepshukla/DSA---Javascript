const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let key = nums[i];
    let j;
    for (j = i - 1; j >= 0 && nums[j] > key; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = key;
  }
  return nums;
};

const nums = [20, 12, 13, 10, 4, 34, 23, 89, 69];
console.log(insertionSort(nums));
