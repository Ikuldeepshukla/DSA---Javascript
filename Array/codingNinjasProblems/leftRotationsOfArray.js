/**
 * problem - https://www.codingninjas.com/codestudio/problems/left-rotations-of-an-array_985298?topList=top-array-coding-interview-questions
 * You are given an array consisting of 'N' elements and you need to perform 'Q' queries on the given array.
 * Each query consists of an integer which tells the number of elements by which you need to left rotate the given array.
 * For each query return the final array obtained after performing the left rotations.
 *
 */

// broot force approach
const leftRotateArray = (array, r) => {
  if (array.length === 1) {
    return array;
  } else {
    for (let i = 0; i < r; i++) {
      let temp = array[0];
      for (let j = 1; j < array.length; j++) {
        array[j - 1] = array[j];
      }
      array[array.length - 1] = temp;
    }
    return array;
  }
};

// driver code
let arr = [4, 1, 6, 2, 3, 9, 7, 5];
let r = 3;
console.log(leftRotateArray(arr, r));
