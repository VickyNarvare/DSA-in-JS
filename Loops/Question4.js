//! Sum of Digits
let n = 920220;
let sumOfDigit = 0;
while (n > 0) {
  let digit = n % 10;
  sumOfDigit += digit;
  n = Math.floor(n / 10);
}
console.log(sumOfDigit);
