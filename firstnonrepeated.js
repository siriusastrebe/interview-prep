// How do you print the first non-repeated character from a string?

function firstNonRepeated(str) {
  // Can be done in o(n) time with o(1) space.
  // Track three adjacent characters. We can call these the head, body and tail. 
  // If the body is different than the head, and the tail is different from the body, that is our first non-repeated character
  // Need proof? If the head and body are the same, we're looking at a repeated character on the body. If the body and tail are the same, then we're still repeating a previously seen repeat.
  if (str.length === 0) {
    return null;
  } 
  if (str.length === 1) {
    return str[0];
  }
  if (str.length === 2) {
    if (str[0] !== str[1]) {
      return str[0];
    } else {
      return undefined;
    }
  }
  if (str.length > 2) {
    let i = 0;
    while (i < str.length - 1) {
      let tail = str[i];
      let body = str[i+1];
      let head = str[i+2];

      if (head !== body && body !== tail) {
        return body
      }

      i++;
    }
    return undefined;
  }
}


let str;
str = 'aaabbccd';
console.log('first nonrepeated of ', str, firstNonRepeated(str));

str = 'aaabbccde';
console.log('first nonrepeated of ', str, firstNonRepeated(str));

str = 'aaabbccddeefgghhjj';
console.log('first nonrepeated of ', str, firstNonRepeated(str));

str = 'aaabbbcccddeefghijkl';
console.log('first nonrepeated of ', str, firstNonRepeated(str));

str = '';
console.log('first nonrepeated of ', str, firstNonRepeated(str));

str = 'a';
console.log('first nonrepeated of ', str, firstNonRepeated(str));

str = 'aa';
console.log('first nonrepeated of ', str, firstNonRepeated(str));

str = 'ab';
console.log('first nonrepeated of ', str, firstNonRepeated(str));

str = 'abc';
console.log('first nonrepeated of ', str, firstNonRepeated(str));

str = 'aabbccddeeffgg';
console.log('first nonrepeated of ', str, firstNonRepeated(str));
