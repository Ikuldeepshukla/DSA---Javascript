// create a buildheap method that returns minheap

function buildMinHeap(arr, n) {
  let startIndex = Math.floor(n / 2) - 1;
  let i = startIndex;
  while (i >= 0) {
    heapify(arr, n, i);
    i--;
  }
  return arr;
}

function heapify(arr, n, i) {
  let smallest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && arr[l] < arr[smallest]) {
    smallest = l;
  } else if (r < n && arr[r] < arr[smallest]) {
    smallest = r;
  }
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapify(arr, n, smallest);
  }
}

let arr = [1, 3, 7, 9, 2, 10, 8, 16, 18, 22, 27];
let n = arr.length;

buildMinHeap(arr, n);
console.log(arr);
