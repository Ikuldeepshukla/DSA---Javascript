// implementation of binary search using Array
// to implement binary search, the array should be sorted

// readline-sync import to scan input from console
const readline = require("readline-sync");

// binary search function -recursive approach - O(log n)
function binarySearch(arr, searchElement, start, end) {
  if (start > end) {
    return -1;
  } else {
    let mid = Math.floor((start + end) / 2);
    console.log(mid);
    if (arr[mid] === searchElement) {
      return mid;
    } else if (searchElement < arr[mid]) {
      return binarySearch(arr, searchElement, start, mid - 1);
    } else {
      return binarySearch(arr, searchElement, mid + 1, end);
    }
  }
}

// driver code
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
const result = binarySearch(userArray, element, 0, userArray.length - 1);

if (result != -1) {
  console.log(`${element} is present at index ${result}`);
} else {
  console.log(`${element} is not present in the Array`);
}
