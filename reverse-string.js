// How can a given string be reversed using recursion?

function reverse(str, index) {
  if (typeof str === 'string') {
     str = str.split('');
  }

  if (index === undefined) {
    index = 0;
  }

  if (index < (str.length / 2) - 1) {
    reverse(str, index + 1); 
  }

  const tmp = str[index];
  str[index] = str[str.length - 1 - index];
  str[str.length - 1 - index] = tmp;

  return str.join('')
}

let s = 'ab'
console.log('Reverse of ', s, reverse(s));

s = 'abb'
console.log('Reverse of ', s, reverse(s));

s = 'abcd'
console.log('Reverse of ', s, reverse(s));

s = 'ABCxyz'
console.log('Reverse of ', s, reverse(s));

s = 'ABC_-*-_xyz'
console.log('Reverse of ', s, reverse(s));

s = ''
console.log('Reverse of ', s, reverse(s));
