// I had to solve this for my first coding interview for a college job
function isPalindrome(s) {
  for (let i=0; i<Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let s;
s = 'abccba';
console.log('Is palindrome', s, isPalindrome(s));

s = 'abcdfg';
console.log('Is palindrome', s, isPalindrome(s));

s = 'aabbaa';
console.log('Is palindrome', s, isPalindrome(s));

s = 'aabaa';
console.log('Is palindrome', s, isPalindrome(s));

s = 'aaabcbaaa';
console.log('Is palindrome', s, isPalindrome(s));
