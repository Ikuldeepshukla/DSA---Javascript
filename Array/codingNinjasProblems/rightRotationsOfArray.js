/**
 * similar problem - https://www.codingninjas.com/codestudio/problems/left-rotations-of-an-array_985298?topList=top-array-coding-interview-questions
 * You are given an array consisting of 'N' elements and you need to perform 'Q' queries on the given array.
 * Each query consists of an integer which tells the number of elements by which you need to right rotate the given array.
 * For each query return the final array obtained after performing the left rotations.
 */

// broot force approach
const rightRotateArray = (array, r) => {
  if (array.length <= 1) {
    return array;
  } else {
    for (let i = 0; i < r; i++) {
      let temp = array[arr.length - 1];
      for (let j = array.length - 1; j > 0; j--) {
        array[j] = array[j - 1];
      }
      array[0] = temp;
    }
    return array;
  }
};

// driver code
let arr = [2, 4, 8, 1, 4, 3, 9, 22, 34, 23, 12, 13, 32, 90];
let r = 7;

console.log(rightRotateArray(arr, r));
