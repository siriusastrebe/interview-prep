// Write a program to Validate an IPv4 Address. 
// According to Wikipedia, IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1

function validateIP(addr) {
  const addresses = addr.split('.')
  if (addresses.length !== 4) {
    return false;
  }
  for (let i=0; i<addresses.length; i++) {
    let a = addresses[i];
    if (typeof a === 'string') {
      a = Number(a);
    }

    if (typeof a !== 'number') {
      return false;
    }
    if (Number.isNaN(a)) {
      // This check is necessary because typeof NaN === 'number'
      return false;
    }
    if (a < 0 || a > 255) {
      return false;
    }
  }
  return true;
}



const ip1 = "128.0.0.1";
const ip2 = "125.16.100.1";
const ip3 = "125.512.100.1";
const ip4 = "125.512.100.abc";
const ip5 = "222.111.111.111";
const ip6 = "5555..555";
const ip7 = "0000.0000.0000.0000";
const ip8 = "1.1.1.1";

console.log(validateIP(ip1));
console.log(validateIP(ip2));
console.log(validateIP(ip3));
console.log(validateIP(ip4));
console.log(validateIP(ip5));
console.log(validateIP(ip6));
console.log(validateIP(ip7));
console.log(validateIP(ip8));
