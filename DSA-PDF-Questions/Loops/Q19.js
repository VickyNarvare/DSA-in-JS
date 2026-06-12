//! Print natural numbers up to n
const prompt = require("prompt-sync")();
const n = Number(prompt("Enter Number:  "));
for (let i = 1; i <= n; i++) {
  console.log(i);
}
