// How do you find the missing number in a given integer array of 1 to 100?
const arr = new Array();
for (let i=0; i<101; i++) {
  arr.push(i);
}

const shortStick = Math.floor(Math.random() * 100)

arr.splice(shortStick, 1);

let total = 0;
for (let i=0; i<arr.length; i++) {
  total += arr[i];
}

console.log('Shortstick ' + shortStick + '. missing item ' + (5050 - total));
