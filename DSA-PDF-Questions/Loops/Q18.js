//! Print 'Hello World' n times

const prompt = require("prompt-sync")();
const n = Number(prompt("Enter Number:  "));
for (let i = 0; i < n; i++) {
  console.log("Hello JavaScript");
}
