// How do you print the first non-repeated (unique) character from a string?

function firstUniqueCharacter(str) {
  const unique = {};
  for (let i=0; i<str.length; i++) {
    if (unique[str[i]] === true) {
      unique[str[i]] = false;
    } else if (unique !== false) {
      unique[str[i]] = true;
    }
  }

  for (let i=0; i<str.length; i++) {
    if (unique[str[i]]) {
      return str[i];
    }
  }
  return null;
}

const str1 = 'abcdefghija';
console.log('First unique character of ', str1, firstUniqueCharacter(str1));

const str2 = 'hello';
console.log('First unique character of ', str2, firstUniqueCharacter(str2));

const str3 = 'Java';
console.log('First unique character of ', str3, firstUniqueCharacter(str3));

const str4 = 'simplest';
console.log('First unique character of ', str4, firstUniqueCharacter(str4));
