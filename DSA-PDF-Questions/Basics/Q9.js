//! Circumference of circle

const prompt = require("prompt-sync")();
const r = Number(prompt("Enter the radius of Circle: "));

const circumference = 2 * Math.PI * r;
console.log(circumference.toFixed(4));
