/**
 * check if you can make a palindrome using the input string, retur true/false
 * @param {string} str
 * @return {boolean}
 */
const checkPalindrome = (str) => {
  let result = [];
  let palindrome = false;
  result = permute(str, "", result);
  for (let i = 0; i < result.length; i++) {
    if (!!isPalindrome(result[i])) {
      return true;
    }
  }
  return palindrome;
};

function permute(str, s, result) {
  if (str.length === 0) {
    return result.push(s);
  } else {
    let temp;
    for (let i = 0; i < str.length; i++) {
      let ch = str[i];
      let ls = str.slice(0, i);
      let rs = str.slice(i + 1);
      let newStr = ls + rs;
      temp = permute(newStr, s + ch, result);
    }
    return result;
  }
}

function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;
  while (l <= r) {
    if (str.charAt(l++) !== str.charAt(r--)) {
      return false;
    }
  }
  return true;
}



function check(str) {
    let obj = {};
    
    for(let i=0;i<=str.length-1;i++) {
        if(obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    let count = 0;
    for(ob in obj) {
        if(obj[ob] == 1) {
            count++;
        }   
    }
    if(count == 1) {
        return true;
    }
    return false;
}

// driver code
// let str = "abbbaccccdd";
let str = "abbbaccccdd";
console.log(check(str));
