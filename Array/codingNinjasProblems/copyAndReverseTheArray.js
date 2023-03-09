/**
 * Problem - Copy And Reverse The Array - https://www.codingninjas.com/codestudio/problems/copy-and-reverse-the-array_1058196?topList=top-array-coding-interview-questions
 * You are given an array 'ARR' consisting of 'N' non negative integers. copy the elements of 'ARR' into another array 'COPY_ARR' in reverse order.
 */

const copyAndReverseTheArray = (arr) => {
  const reverseArray = [];
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    reverseArray[j - i] = arr[i];
  }
  return reverseArray;
};

// driver code
let arr = [1, 2, 3, 4, 5, 6];

console.log(copyAndReverseTheArray(arr));
