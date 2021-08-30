// Implement division (without using the division operator)

// function trickQuestion(n1, n2) {
//   Multiply by the reciprocal
//   return n1 * Math.pow(n2, -1);
// }


function longDivision(n1, n2, recursions) {
  recursions = recursions || 0;
  let result = 0;

  if (n2 * 10 < n1) { // Not strictly necessary, helps cut down on while loops
    const divisions = longDivision(n1, n2 * 10, Infinity);
    n1 = n1 - n2 * 10 * divisions;
    result = result + divisions * 10;
  }

  while (n2 <= n1) {
    // console.log(n1, n2, recursions);
    n1 = n1 - n2;
    result++;
  }

  if (n2 > n1 && recursions < 14) {
    return result + 0.1 * longDivision(n1 * 10, n2, recursions + 1);
  } else {
    return result;
  }
}

let numerator;
let denominator;

numerator = 9;
denominator = 3;
console.log('Dividing', numerator, 'by', denominator, 'equals', longDivision(numerator, denominator));


numerator = 9;
denominator = 4;
console.log('Dividing', numerator, 'by', denominator, 'equals', longDivision(numerator, denominator));

numerator = 27;
denominator = 3;
console.log('Dividing', numerator, 'by', denominator, 'equals', longDivision(numerator, denominator));

numerator = 11;
denominator = 5;
console.log('Dividing', numerator, 'by', denominator, 'equals', longDivision(numerator, denominator));

numerator = 13;
denominator = 3;
console.log('Dividing', numerator, 'by', denominator, 'equals', longDivision(numerator, denominator));

numerator = 130;
denominator = 3;
console.log('Dividing', numerator, 'by', denominator, 'equals', longDivision(numerator, denominator));

numerator = 123456789;
denominator = 3;
console.log('Dividing', numerator, 'by', denominator, 'equals', longDivision(numerator, denominator));

numerator = 55555555;
denominator = 232323;
console.log('Dividing', numerator, 'by', denominator, 'equals', longDivision(numerator, denominator));

