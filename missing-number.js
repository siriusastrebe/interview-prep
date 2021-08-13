// How do you find the missing number in a given integer array of 1 to 100?
const arrSize = 1000;

function missingNumber(arr, size) {
  const bitwise = new Array(Math.ceil(size/30)).fill(0); // Each bitwise will represent a range of 30 values

  for (let i=0; i<arr.length; i++) {
    const index = Math.floor(i/30);
    bitwise[index] = bitwise[index] | 1 << arr[i] % 30;
  }

  const missingBit = bitwise.map((b, i) => {
    console.log('Missing bits', i, b);
    const mask = Math.pow(2, (i < Math.floor(size/30) ? 30 : arrSize % 30)) - 1;
    return b ^ mask;
  });

  const missing = missingBit.map((m, i) => {
    return m ? Math.log2(m) : 0;
  });

  for (let i=0; i<missing.length; i++) {
    if (missing[i]) {
      return missing[i] - 1 + i * 30; 
    }
  }
}

const arr = [];
for (let i=1; i<arrSize; i++) {
  arr.push(i);
}

const deleted = Math.floor(Math.random() * arr.length);
arr.splice(deleted, 1);
console.log('Deleted index', deleted);
console.log('Missing number: ' + missingNumber(arr, arrSize));
