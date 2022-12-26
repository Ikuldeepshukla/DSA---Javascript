const ternarySearch = (arr, num) => {
  let l = 0;
  let r = arr.length - 1;
  return helper(arr, num, l, r);
};

const helper = (arr, num, l, r) => {
  if (l > r) {
    return -1;
  }

  // find mid points
  let mid1 = Math.trunc(l + (r - l) / 3);
  let mid2 = Math.trunc(r - (r - l) / 3);

  if (arr[mid1] === num) {
    return mid1;
  } else if (arr[mid2] === num) {
    return mid2;
  } else if (num < arr[mid1]) {
    return helper(arr, num, l, mid1 - 1);
  } else if (num > arr[mid2]) {
    return helper(arr, num, mid2 + 1, r);
  } else if (num > arr[mid1] && num < arr[mid2]) {
    return helper(arr, num, mid1 + 1, mid2 - 1);
  } else {
    return -1;
  }
};

// driver code
const arr = [1, 3, 4, 5, 7, 9, 12, 14, 16, 18, 20, 21, 24, 26, 30];
console.log(ternarySearch(arr, 30));
