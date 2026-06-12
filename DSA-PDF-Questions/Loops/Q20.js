//!  Reverse for loop – Print n to 1

const prompt = require("prompt-sync")();
const n = Number(prompt("Enter Number:  "));

for (let i = n; i > 0; i--) {
  console.log(i);
}
