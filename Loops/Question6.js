//! Reverse a Number
let n = 1234;
let rev = 0;
while (n >= 0) {
  let digit = n % 10;
  rev += rev * 10 + digit;
  n = n % 10;
}
console.log(rev);
