//! Sum and message
const prompt = require("prompt-sync")();
const firstNum = Number(prompt("Enter First Number: "));
const secondNum = Number(prompt("Enter Second Number: "));

const sum = (a, b) => a + b;
//*Template Literals
const resultUsingTL = `Sum of ${firstNum} + ${secondNum} is ${sum(firstNum, secondNum)}`;
//*Type Coercion
const resultUsingTC =
  "Sum of " + firstNum + " + " + secondNum + " is " + sum(firstNum, secondNum);

console.log(resultUsingTL);
console.log(resultUsingTC);
