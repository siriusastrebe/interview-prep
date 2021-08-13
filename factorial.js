//function factorial(num) {
//  let total = Math.min(num, 1);
//  for (let i=2; i<num+1; i++) {
//    total *= i;
//  }
//  return total;
//}

function factorial(count) {
  if (count === 0) {
    return 1;
  } else {
    return count * factorial(count-1);
  }
}

console.log('Factorial of 8', factorial(8));
console.log('Factorial of 10', factorial(10));
