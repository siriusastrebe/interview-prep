// How do you rotate an array by N elements?

function rotateLeft(arr, n) {
  if (n === undefined) n = 1;

  const spliced = arr.splice(0, n)
  spliced.forEach(s => arr.push(s));
  return arr;
}

let s;
s = [0, 1, 2, 3]
console.log('rotating by 2', JSON.stringify(s), JSON.stringify(rotateLeft(s, 2)));


s = [0, 1, 2, 3, 4, 5]
console.log('rotating by 3', JSON.stringify(s), JSON.stringify(rotateLeft(s, 3)));


s = ['rear', 'tail', 'head', 'torso', 'thorax']
console.log('rotating by 2', JSON.stringify(s), JSON.stringify(rotateLeft(s, 2)));