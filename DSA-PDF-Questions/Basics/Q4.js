//! Accept and print the answer
const prompt = require("prompt-sync")();
const userName = prompt("Enter Your Name: ");
const userAge = Number(prompt("Enter Your Age: "));

console.log(`Your name is ${userName}`);
console.log("Your Age is " + userAge);
