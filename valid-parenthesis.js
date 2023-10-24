// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// 
// An input string is valid if:
// 
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.
// 

// Chomsky defined a hierarchy of problems that can be solved with varying complexities of solutions. This specific question I know is a regular grammar question, and can be completed in one pass, so is an O(n) problem. It does require storage, up to O(n) that can be referenced as you parse through the string.


function validString(str) {
  const openingSymbols = [];
  for (let i=0; i<str.length; i++) {
    const c = str[i];
    if (c === '(' || c=== '{' || c === '[') {
      openingSymbols.push(c);
    }
    const current = openingSymbols[openingSymbols.length-1];

    if (c === ')' && current === '(') {
      openingSymbols.splice(openingSymbols.length - 1, 1);
    }
    if (c === '}' && current === '{') {
      openingSymbols.splice(openingSymbols.length - 1, 1);
    }
    if (c === ']' && current === '[') {
      openingSymbols.splice(openingSymbols.length - 1, 1);
    }
  }
  if (openingSymbols.length > 0) {
    return false;
  }

  return true;
}

let s;
s = "()"
console.log(validString(s));

s = "()[]{}"
console.log(validString(s));

s = "(]"
console.log(validString(s));
