// How do you check if two strings are a rotation of each other?

function isRotated(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  for (let i=0; i<s2.length; i++) {
    if (s1[0] === s2[i]) {
      let matching = true;
      for (let j=0; j<s2.length; j++) {
        if (s1[j] !== s2[(i + j) % s2.length]) {
          matching = false;
          continue;
        }
      }

      if (matching === true) {
        return true;
      }
    }
  }

  return false;
}


let s1;
let s2;

s1 = 'abcdefg';
s2 = 'bcdefga';
console.log('Is rotated', s1, s2, isRotated(s1, s2));

s1 = 'abcdefgh';
s2 = 'bcdefgah';
console.log('Is rotated', s1, s2, isRotated(s1, s2));

s1 = 'abcdefgh';
s2 = 'bcdefgha';
console.log('Is rotated', s1, s2, isRotated(s1, s2));

s1 = 'aaaaaa';
s2 = 'aaaaaa';
console.log('Is rotated', s1, s2, isRotated(s1, s2));

s1 = 'aaabaa';
s2 = 'aabaaa';
console.log('Is rotated', s1, s2, isRotated(s1, s2));


s1 = 'ababaa';
s2 = 'aabaab';
console.log('Is rotated', s1, s2, isRotated(s1, s2));
