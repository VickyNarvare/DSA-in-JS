//! Shop discount calculation
//5000 -> 5%  ->  5000 - (5000*5/100) ===  4750

const prompt = require("prompt-sync")();
const amount = Number(prompt("Enter Amount:  "));
const discount = Number(prompt("Enter Discount:  "));

const paybleAmount = amount - (amount * discount) / 100;
console.log(paybleAmount);
