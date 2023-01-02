// 2. You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check. Since each
// version is developed based on the previous version, all the versions after a bad version
// are also bad. Suppose you have n version and you want to find out the first bad one,
// which causes all the following ones to be bad. Also, talk about the time complexity of
// your code.
// Test Cases:
// Input: [0,0,0,1,1,1,1,1,1]
// Output: 3
// Explanation: 0 indicates a good version and 1 indicates a bad version. So, the index of
// the first 1 is at 3. Thus, the output is 3

// using linear search
// const findFirstBadProduct = (versions) => {
//     for (let index = 0; index < versions.length; index++) {
//         if(versions[index] === 1){
//             return index;
//         }
//     }
// };

// using binary search
const findFirstBadProduct = (versions) => {
  return helper(0, versions.length - 1, versions, -1);
};

function helper(l, r, versions, result) {
  if (l > r) {
    return result;
  }
  let mid = Math.trunc(l + (r - l) / 2);
  if (versions[mid] === 1) {
    result = mid;
    r = mid - 1;
    return helper(l, r, versions, result);
  } else if (versions[mid] === 0) {
    l = mid + 1;
    return helper(l, r, versions, result);
  }
}
let versions = [0, 0, 0, 1, 1];

console.log(findFirstBadProduct(versions));
