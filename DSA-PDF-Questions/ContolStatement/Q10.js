//! Greatest between two numbers
const prompt = require("prompt-sync")();
const num1 = Number(prompt("Enter First Number "));
const num2 = Number(prompt("Enter Second Number "));

if (num1 > num2) {
  console.log("First Number Greater");
} else if (num1 === num2) {
  console.log("Number are Equal");
} else {
  console.log("Second Number Greater");
}
