// Given a string S that consists of only alphanumeric characters and dashes. The string is separated into N + 1 groups by N dashes. Also given an integer K.
// We want to reformat the string S, such that each group contains exactly K characters, except for the first group, which could be shorter than K but still must contain at least one character. Furthermore, a dash must be inserted between two groups, and you should convert all lowercase letters to uppercase.
// Return the reformatted string.

// Some thoughts: We'd like to return the key characters in the same order we received it, is that right?
// Although we could use some clever arithmetic to determine ahead of time what the size of the first array element is, it might be more readable to reverse it twice.
// The hyphens in the original key are irrelevant to the new key's shape, so we can treat formatted keys and strings the same.


function licenseKeyFormatting(key, k) {
  if (Array.isArray(key)) {
    let newKey = key.join('');
    return addHyphens(newKey, k);
  } else if (typeof key === 'string') {
    return addHyphens(removeHyphens(key), k);
  }
}

function removeHyphens(key, k) {
  return key.replace(/[^0-9a-z]/gi, '')
}
function addHyphens(key, k) {
  if (!k || k <= 0) {
    throw "Key provided is invalid. Please provide a positive integer."
  }
  let sizeOfFirstElement = key.length % k;
  if (sizeOfFirstElement === 0) {
    sizeOfFirstElement = k;
  }

  const newKey = [];
  newKey.push(key.substring(0, sizeOfFirstElement));

  let i=sizeOfFirstElement;
  while (i < key.length) {
    newKey.push(key.substring(i, i+k));
    i += k;
  }
  return newKey;
}

const k1 = "5F3Z-2e-9-w";
const k2 = "2-5g-3-J";


console.log(licenseKeyFormatting(k1, 4));
console.log(licenseKeyFormatting(k2, 2));
