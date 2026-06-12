//! Sum of two integers

const prompt = require("prompt-sync")();
const firstNum = Number(prompt("Enter First Number: "));
const secondNum = Number(prompt("Enter Second Number: "));

const sum = (a, b) => a + b;
const result = sum(firstNum, secondNum);
console.log(result);
