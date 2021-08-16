// How do you find multiple missing numbers in a given integer array of 1 to n?
const arrSize = 1000;

function missingNumbers(arr, size) {
  const bitwise = new Array(Math.ceil(size/30)).fill(0); // Each bitwise will represent a range of 30 values

  for (let i=0; i<arr.length; i++) {
    const val = arr[i] - 1;
    const index = Math.floor(val/30);
    bitwise[index] = bitwise[index] | 1 << val % 30;
  }

  const missingBit = bitwise.map((b, i) => {
    const bitwiseSize = i < Math.floor(size/30) ? 30 : size % 30;
    const mask = (1 << bitwiseSize) - 1;
    // console.log('Missing bits', i, b, bitwiseSize, mask);
    return b ^ mask;
  });

  const missing = [];
  missingBit.forEach((m, i) => {
    const bitwiseSize = i < Math.floor(size/30) ? 30 : size % 30;
    // console.log('size m', bitwiseSize, m);
    for (let j=0; j<bitwiseSize; j++) {
      if (m & 1 << j) {
        missing.push(j + 1 + i * 30);
      }
    }
  });
  return missing;
}

const arr = [];
for (let i=1; i<=arrSize; i++) {
  arr.push(i);
}

let deleted = Math.floor(Math.random() * arr.length);
console.log('Deleted ', arr[deleted]);
arr.splice(deleted, 1);

deleted = Math.floor(Math.random() * arr.length);
console.log('Deleted ', arr[deleted]);
arr.splice(deleted, 1);

shuffle(arr);

console.log('Missing number: ' + missingNumbers(arr, arrSize));

function shuffle(array) {
  var currentIndex = array.length, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

