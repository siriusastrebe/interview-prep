// Find largest word in dictionary by deleting some characters of given string
// Giving a dictionary and a string ‘str’, find the longest string in dictionary which can be formed by deleting some characters of the given ‘str’. 

// Some thoughts: Because we're looking for the longest substring only, we can sort by length descending stop checking after the first match we find.
// We can't delete elements without affecting checks on later parts of the string. This makes checking an o(n^2) if we have to check for each starting character.

// If instead of deleting, we just scan the string and track each character seen in the word, this would keep it O(n)

function largestByDeleting(str, dict) {
  dict.sort((a, b) => {
    if (a.length < b.length) {
      return 1;
    } else if (a.length > b.length) {
      return -1;
    } else {
      return 0;
    }
  });

  // console.log(dict);

  for (let i=0; i<dict.length; i++) {
    const word = dict[i];
    const seen = [];
    for (let j=0; j<str.length; j++) {
      if (str[j] === word[seen.length]) {
        seen.push(true);
      }
      // console.log(seen, word, j);
      if (seen.length === word.length) {
        return word;
      }
    }
  }
  return null;
}


const d1 = ["ale", "apple", "monkey", "plea"];
const str1 = "abpcplea";

console.log(largestByDeleting(str1, d1));


// Output : apple 

const d2 = ["pintu", "geeksfor", "geeksgeeks", " forgeek"];
const str2 = "geeksforgeeks";

console.log(largestByDeleting(str2, d2));

// Output : geeksgeeks
