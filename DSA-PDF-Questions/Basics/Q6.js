//! Calculate Compound Interest

const prompt = require("prompt-sync")();

const p = Number(prompt("Enter a Principle Amount(p): ")); //* p = 10000
const r = Number(prompt("Enter a Annual Rate(r): ")); //* r = 5
const n = Number(prompt("Enter a Compounds par Year(n): ")); //* n = 10
const t = Number(prompt("Enter a Time in Years(t): ")); //* t = 12

//? Calculating the Compound Interest
let amount = p * Math.pow(1 + r / (100 * n), n * t); //* Compound Interest = 18193

console.log(`Compound Interest Amount: ${Math.floor(amount)}`);
