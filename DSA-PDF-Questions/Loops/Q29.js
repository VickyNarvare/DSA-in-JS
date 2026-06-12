//!  Reverse a number
let number = 123456789;
let reverseNumber = 0;

while (number > 0) {
  let digit = number % 10;
  reverseNumber = reverseNumber * 10 + digit;
  number = Math.floor(number / 10);
}
console.log(reverseNumber);
