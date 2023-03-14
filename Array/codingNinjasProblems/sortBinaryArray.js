/**
 * Problem - https://www.codingninjas.com/codestudio/problems/binary-array-sorting_985289?topList=top-array-coding-interview-questions
 * A binary array is an array consisting of only 0s and 1s. You are given a binary array "arr" of size ‘N’. Your task is to sort the given array and return this array after sorting.
 */

const sortBinaryArray = (array) => {
  if (array.length === 1) {
    return array;
  } else {
    let l = 0;
    let r = array.length - 1;
    let i = 0;
    while (l < r) {
      if (array[l] === 1 && array[r] === 0) {
        let temp = array[l];
        array[l] = array[r];
        array[r] = temp;
        l++;
        r--;
      } else if (array[l] === 0 && array[r] === 1) {
        l++;
        r--;
      } else if (array[l] === 1 && array[r] === 1) {
        r--;
      } else {
        l++;
      }
    }
    return array;
  }
};

// driver code
let arr = [0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1];

console.log(sortBinaryArray(arr));
