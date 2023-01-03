// 3. Given a positive integer num, write a program that returns True if num is a perfect
// square else return False. Do not use built-in functions like sqrt. Also, talk about the time
// complexity of your code.
// Test Cases:
// Input: 16
// Output: True
// Input: 14
// Output: False

const findPerfectSquare = () => {
  return helper(1, num, num);
};

function helper(l, r, num) {
  if (l > r) {
    return false;
  }
  let mid = Math.trunc(l + (r - l) / 2);
  if (mid * mid === num) {
    return true;
  } else if (mid * mid > num) {
    return helper(l, mid - 1, num);
  } else {
    return helper(mid + 1, r, num);
  }
}

// driver code
const num = 40000;
console.log(findPerfectSquare(num));
