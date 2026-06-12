//!  Power of a number (a^b)
const a = 12;
const b = 2;
let powerOFNumber = 1;
for (let i = 0; i < b; i++) {
  powerOFNumber *= a;
}
console.log(powerOFNumber);
console.log(a ** b);
console.log(Math.pow(a, b));
