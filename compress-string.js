// Produce a compressed string. For example, you may turn aaaabbc into a4b2c1. You may turn a into a1

// This problem is asking to identify repeats, and group them by character followed by number after the character
// It's missing some other ways to compress. For example, abababccc could be compressed as [ab]3c3, but this isn't being asked.

function compressString(str) {
  let repeating = false;
  let count = 0;
  let output = '';

  for (let i=0; i<str.length; i++) {
    if (repeating && repeating === str[i]) {
      count++;
    } else {
      if (repeating) {
        output += repeating + count
      }
      repeating = str[i];
      count = 1;
    }
  }
  if (repeating) {
    output += repeating + count
  }
  return output
}

let s; let s2;
s = 'aaabbccccddddeeeeeeffffgggg';
console.log('Compressing string', s, compressString(s));

s = 'abcdefghijklmnop';
console.log('compressing string', s, compressString(s));

s = '';
console.log('Compressing string', s, compressString(s));
