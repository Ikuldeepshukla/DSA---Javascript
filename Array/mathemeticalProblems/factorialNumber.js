// get factorial of a number

function getFactorial(number) {
  let result = number;
  let index = number;
  if (number === 0 || number === 1) {
    result = 1;
  }
  while (index > 1) {
    result = result * (index - 1);
    index--;
  }
  return result;
}

console.log(getFactorial(1));
