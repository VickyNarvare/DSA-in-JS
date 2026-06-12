//! Swap two variables (3 methods)

const prompt = require("prompt-sync")();
const firstNum = Number(prompt("Enter First Number: "));
const secondNum = Number(prompt("Enter Second Number: "));
let a = firstNum,
  b = secondNum;
//* Method - 1 (without using 3rd variable)
//! example -> a = 2 , b = 4
// a = a + b; //* a = 6
// b = a - b; //* b = 2
// a = a - b; //* a = 2
//* Method - 2 (using 3rd variable)
// let temp = a; //* Temp = a = 2
// a = b; //* a = 4
// b = temp; //* b = Temp = 2
//* Method - 3 (using Array Destructuring)  {very Easy}
[a, b] = [b, a];
console.log(
  `before swiping FirstNumber is ${firstNum} or SecondNumber is ${secondNum} `,
);
console.log(`After swapping FirstNumber is ${a} or SecondNumber is ${b} `);
