// Given a string s, return the longest palindromic substring in s
// Any part of our string can be palindromic. The longest palindrome also contains within it smaller palindromes
// Palindromes either has two of the same letter, or a single letter in the middle of the palindrome.

// A fairly naive solution could visit each letter in the sequence, then test to see if the letters to the left and right of the current letter match. We could do this recursively to get the length of the palindrome.


let longestPalindrome = function(s) {
  let longestLow = 0;
  let longestHigh = 0;
  for (let i=0; i<s.length; i++) {
    let low = i;
    let high = i;

    if (s[low] === s[high + 1]) {
      // This handles palindromes where the two middle letters are equal
      high = high + 1;
    }

    while (low >= 0 && high < s.length && s[low] === s[high]) {
      if (longestHigh - longestLow < high - low) {
        longestLow = low;
        longestHigh = high;
      }
      low = low - 1;
      high = high + 1;
    }
  }
  if (longestLow !== longestHigh) {
    return s.substring(longestLow, longestHigh + 1);
  }
}

console.log(longestPalindrome('abba'));
console.log(longestPalindrome('babad'));

console.log(longestPalindrome('geek'));
console.log(longestPalindrome('vasdlkvj408vaddav804j'));

console.log(longestPalindrome('vasdlkvj408vaddav804j'));

console.log(longestPalindrome('forgeeksskeegfor'));

console.log(longestPalindrome('abcdefghijklmnopqrstuvwxyz'));
