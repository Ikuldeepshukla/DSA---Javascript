// find, if the number is power of two

function isPowerOfTwo(number) {
  if (number < 1) {
    return false;
  } else {
    let tempNumber = number;
    while (tempNumber > 0) {
      if (tempNumber % 2 === 0) {
        tempNumber = tempNumber / 2;
      } else {
        if (tempNumber === 1) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}

function optimizedIsPowerOfTwo(number) {
  if (number < 1) {
    return false;
  }
  return (number & (number - 1)) === 0;
}

console.log(isPowerOfTwo(1)); // O(n)
console.log(optimizedIsPowerOfTwo(16)); // O(1)
