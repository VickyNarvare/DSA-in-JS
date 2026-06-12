//!  Greatest among three numbers

const prompt = require("prompt-sync")();
const num1 = Number(prompt("Enter First Number:  "));
const num2 = Number(prompt("Enter Second Number:  "));
const num3 = Number(prompt("Enter Third Number:  "));

if (num1 > num2) {
  console.log("First Number is Greatest");
} else if (num2 > num3) {
  console.log("Second Number is Greatest");
} else {
  console.log("Third Number id Greatest");
}
