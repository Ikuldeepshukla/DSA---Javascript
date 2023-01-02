/* 1. Compute and return the square root of x, where x is guaranteed to be a non-negative
integer. And since the return type is an integer, the decimal digits are truncated and only
the integer part of the result is returned. Also, talk about the time complexity of your
code.
Test Cases:
Input: 4
Output: 2
Input: 8
Output: 2
Explanation: The square root of 8 is 2.8284…., the decimal part is truncated and 2 is
returned.
Hint: Try to use a modified binary search approach for an optimized solution
*/

const findSquareRoot = (num) => {
  let l = 1;
  let r = num;
  return helper(l, r, num, 1);
};

function helper(l, r, num, tempResult) {
  if (l <= r) {
    let mid = Math.trunc(l + (r - l) / 2);
    if (mid * mid === num) {
      return mid;
    } else if (mid * mid > num) {
      return helper(l, mid - 1, num, tempResult);
    } else {
      tempResult = mid;
      return helper(mid + 1, r, num, tempResult);
    }
  }
  return tempResult;
}

let n = 1;
console.log(findSquareRoot(n));
