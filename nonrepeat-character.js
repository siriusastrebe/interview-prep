// How do you print the first non-repeated character from a string? (solution)

function nonRepeated(str) {
  if (str.length === 0) {
    return null;
  }

  if (str.length === 1) {
    return str[0];
  }

  if (str.length > 1) {
    if (str[0] !== str[1]) {
      return str[0];
    }

    for (let i=1; i<str.length-1; i++) {
      if (str[i] !== str[i+1]) {
        return str[i+1];
      }
    }
  }
   
  return null;
}


let s1 = 'AAABCDEF';
console.log('First non-repeated character of ', s1, nonRepeated(s1));

let s2 = 'zzzzzzzzz8';
console.log('First non-repeated character of ', s2, nonRepeated(s2));

s3 = 'ab';
console.log('First non-repeated character of ', s3, nonRepeated(s3));

s4 = '';
console.log('First non-repeated character of ', s4, nonRepeated(s4));

s5 = 'aa3';
console.log('First non-repeated character of ', s5, nonRepeated(s5));

s6 = 'hello';
console.log('First non-repeated character of ', s6, nonRepeated(s6));

s7 = 'Java';
console.log('First non-repeated character of ', s7, nonRepeated(s7));

