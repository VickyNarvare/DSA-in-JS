let prompt = require("prompt-sync")();
let unit = Number(prompt("Enter Unit: "));

//! Top To Bottom Approach

// if (unit > 0 && unit <= 100) console.log(unit * 4.2);
// else if (unit > 100 && unit <= 200) console.log(100 * 4.2 + (unit - 100) * 6);
// else if (unit > 200 && unit <= 400)
//   console.log(100 * 4.2 + 100 * 6 + (unit - 200) * 8);
// else console.log(100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13);

//! Bottom To Top Approach

//700 unit  = 6520 amount
let amount = 0;
if (unit > 400) {
  amount += (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6;
  unit = 100;
}
amount += 100 * 4.2;
console.log(amount);
