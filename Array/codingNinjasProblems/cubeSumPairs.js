// Cube Sum Pairs - https://www.codingninjas.com/codestudio/problems/cube-sum-pairs_1060717?topList=top-array-coding-interview-questions
// problem statement - You are given a positive integer N, and you have to find the number of ways to represent N
// as a sum of cubes of two integers (let's say A and B), such that:
// N = A^3 + B^3

const findCubeSumPairs = (num) => {
  let result = [];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (Math.pow(i, 3) + Math.pow(j, 3) === num) {
        result = [...result, { i, j }];
      }
      if (Math.pow(j, 3) > num) {
        break;
      }
    }
    if (Math.pow(i, 3) > num) {
      break;
    }
  }
  return result.length;
};

// driver code
let num = 72;

console.log(findCubeSumPairs(num));
