// Program to add two binary strings
// Input:  a = "11", b = "1"
// Output: "100" 

function binaryAddition(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;

  let carry = false;
  let newStr = '';
  while (i >= 0 || j >= 0) {
    if (a[i] === '1' && b[j] === '1') {
      if (carry) {
        newStr = '1' + newStr;
      } else {
        newStr = '0' + newStr;
        carry = true;
      }
    } else if (a[i] === '1' || b[j] === '1') {
      if (carry) {
        newStr = '0' + newStr;
      } else {
        newStr = '1' + newStr;
      }
    } else if (carry) {
      newStr = '1' + newStr;
      carry = false;
    } else {
      newStr = '0' + newStr;
    }

    i--;
    j--;
  }

  if (carry) {
    newStr = '1' + newStr
  }

  return newStr;
}

const str1 = "1101";
const str2 = "100";

console.log(binaryAddition(str1, str2));
// 10001

const str3 = "11";
const str4 = "1";

console.log(binaryAddition(str3, str4));
// Output: "100" 
