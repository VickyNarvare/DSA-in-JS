//! Check even or odd
const prompt = require("prompt-sync")();
const num = Number(prompt("Enter Number:  "));

if (num % 2 === 0) {
  console.log("Number is Even.");
} else {
  console.log("Number is Odd.");
}
