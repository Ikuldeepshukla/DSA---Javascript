// find minimum and maximmum in an array using recursion

function findMinAndMaxInArray(arr, start, end) {
  let min, max;
  if (start === end) {
    min = arr[start];
    max = arr[start];
    return { min, max };
  }
  if (start === end - 1) {
    if (arr[start] < arr[end]) {
      min = arr[start];
      max = arr[end];
      return { min, max };
    } else {
      min = arr[end];
      max = arr[start];
      return { min, max };
    }
  } else {
    let mid = Math.floor(start + (end - start) / 2);
    let left = findMinAndMaxInArray(arr, start, mid);
    let right = findMinAndMaxInArray(arr, mid + 1, end);
    max = left?.max >= right?.max ? left?.max : right?.max;
    min = left?.min <= right?.min ? left?.min : right?.min;
    return { min, max };
  }
}

// driver code
let arr = [0, 2, 5, 3, 8, 2, 9, 7, 4, 13, 24, 12, 19, 15, 100];

console.log(findMinAndMaxInArray(arr, 0, arr.length - 1));
