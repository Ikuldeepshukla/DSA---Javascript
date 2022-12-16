/** leetcode - plus one problem - https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let val = BigInt(0);
  let newDigits = [];
  for (let i = 0; i < digits.length; i++) {
    val = val * BigInt(10) + BigInt(digits[i]);
  }
  val = val + BigInt(1);
  while (val > BigInt(9)) {
    let r = val % BigInt(10);
    newDigits = [r, ...newDigits];
    val = (val - r) / BigInt(10);
  }
  newDigits = [val, ...newDigits];
  return newDigits;
};

let num = [4, 6, 2, 2];
console.log(num);
console.log(plusOne(num));
