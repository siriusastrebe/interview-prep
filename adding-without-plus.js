// Can you add two strings that contain integers together without using the plus operator??

function addStrings(s1, s2) {
  let increments = [];
  let decrements = [];

  fullyDowntick(s1, increments, decrements);
  fullyDowntick(s2, increments, decrements);

  return increments.length - decrements.length;
}

function fullyDowntick(s, increments, decrements) {
  s = s.split('');
  let loop = true;
  while (loop > 0) {
    if (s[0] === '-') {
      loop = decrement(decrements, s, s.length-1);
    } else {
      loop = decrement(increments, s, s.length-1);
    }

    if (increments.length > 9999) break;
    if (decrements.length > 9999) break;
  }
}

function decrement(accumulator, s, i) {
  // console.log('decrementing', s[i], i, accumulator ? accumulator.length: '');
  if (i < 0) {
    return false;
  }
  if (s[i] === '-') {
    return false;
  }


  if (s[i] === '0') {
    // Carry over
    s[i] = '9';
    if (decrement(null, s, i-1) === false) {
      return false
    }
  } else if (s[i] === '1') {
    s[i] = '0';
  } else if (s[i] === '2') {
    s[i] = '1';
  } else if (s[i] === '3') {
    s[i] = '2';
  } else if (s[i] === '4') {
    s[i] = '3';
  } else if (s[i] === '5') {
    s[i] = '4';
  } else if (s[i] === '6') {
    s[i] = '5';
  } else if (s[i] === '7') {
    s[i] = '6';
  } else if (s[i] === '8') {
    s[i] = '7';
  } else if (s[i] === '9') {
    s[i] = '8';
  }

  if (accumulator) {
    accumulator.push(true);
  }
  return true;
}

let s1; let s2;
s1 = '4';
s2 = '7';
console.log('adding strings', s1, s2, addStrings(s1, s2));


s1 = '44';
s2 = '75';
console.log('adding strings', s1, s2, addStrings(s1, s2));


s1 = '-44';
s2 = '75';
console.log('adding strings', s1, s2, addStrings(s1, s2));


s1 = '4';
s2 = '1';
console.log('adding strings', s1, s2, addStrings(s1, s2));

s1 = '-1';
s2 = '-1';
console.log('adding strings', s1, s2, addStrings(s1, s2));
