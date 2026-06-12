//! Sum of digits
let number = 123456789;
let sumOfDigit = 0;

while (number > 0) {
  let digit = number % 10;
  sumOfDigit += digit;
  number = Math.floor(number / 10);
}

console.log(sumOfDigit);
