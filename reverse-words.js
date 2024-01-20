// Given a string, the task is to reverse the order of the words in the given string. 

function reverse(str) {
  return str.split(' ').reverse().join(' ');
}

const a = "i love programming very much"
const b = "geeks quiz practice code";

console.log(reverse(a));
console.log(reverse(b));
