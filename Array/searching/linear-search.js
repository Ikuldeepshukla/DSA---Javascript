// Implementation of linear search in Array
// Given an Array of integer [12, 16,19, 30, 25, 67, 89, 10], find out the element 25 position in the Array, return -1 if element is not present.

// readline-sync import to scan input from console
const readline = require("readline-sync");

// Solution
const linearSearch = (arr, searchElement) => {
  // loop will check the element and return the index of the element if present
  for (let i = 0; i < arr.length; i++) {
    if (searchElement === arr[i]) {
      return i;
    }
  }
  // return -1 as element is not present
  return -1;
};

// Driver code
let userArray = [];
console.log("Enter Array elements or press -1 to exit: ");
let readArrayFlag = true;
while (readArrayFlag) {
  let inputVal = parseInt(readline.question());
  if (inputVal === -1) {
    readArrayFlag = false;
  } else {
    userArray.push(inputVal);
  }
}

console.log(userArray);

const element = parseInt(readline.question("Enter any element to search : "));
const result = linearSearch(userArray, element);

if (result != -1) {
  console.log(`${element} is present at index ${result}`);
} else {
  console.log(`${element} is not present in the Array`);
}
