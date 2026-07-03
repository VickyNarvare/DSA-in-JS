//! Number is Automorphic or not
const prompt = require("prompt-sync")();
let num = Number(prompt("Enter Number: "));

let square = num ** 2;
let numberOfDigitInSquare = 10 ** String(num).length;
let digit = square % numberOfDigitInSquare === num ? "yes" : "no";
console.log(digit);

// ----------------------
// let num = 25;
// let square = num ** 2;
// function auto() {
//   while (num > 0) {
//     if (num % 10 != square % 10) {
//       return false;
//     }
//     num /= 10;
//     square /= 10;
//   }
//   return true;
// }
// console.log(auto());
