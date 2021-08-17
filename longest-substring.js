// How do you find the length of the longest substring without repeating characters?

function longestSubstring(str) {
  let seen = {};
  let longestStart = 0;
  let longestEnd = 0;

  for (let i=0; i<str.length; i++) {
    if (seen[str[i]] !== undefined) {
      if (i - seen[str[i]] > longestEnd - longestStart) {
        longestStart = seen[str[i]];
        longestEnd = i-1;
      }
    }

    seen[str[i]] = i;
  }

  return str.slice(longestStart, longestEnd);
}

const s1 = 'AbcdefghijklmnopAqrstuvwxyz';
console.log('Longest substring of ', s1, longestSubstring(s1));

const s2 = 'abba';
console.log('Longest substring of ', s2, longestSubstring(s2));

const s3 = 'bbqwertybb';
console.log('Longest substring of ', s3, longestSubstring(s3));

const s4 = '';
console.log('Longest substring of ', s4, longestSubstring(s4));
