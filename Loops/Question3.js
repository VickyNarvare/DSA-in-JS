//! Strong Number Checker
//* Logic Think
// Todo: 1 - User se Number lo
// Todo: 2 - Number ko split karo ->  i % 10
// Todo: 3 - Ek Ek number ka Factorial nikalo
// Todo: 4 - fir add karo sab ke factorial ko
// Todo: 5 - aab check karo ki factorial ki value user ke number ke equal hai ki nhi
// // Todo: 6 - Imp - Edge Case handle karo
let prompt = require("prompt-sync")();
let orgNum = prompt("Enter Number: ");
let sumOfFec;
function factorial(a) {
  let fec = 1;
  for (let i = 1; i <= a; i++) {
    fec *= i;
  }
  return fec;
}
let newArr = orgNum.split("").map((elem) => {
  let digit = Number(elem);
  return factorial(digit);
});
sumOfFec = newArr.reduce((acc, val) => {
  return acc + val;
}, 0);
if (Number(orgNum) === sumOfFec) {
  console.log("Strong Number");
} else {
  console.log("Not Strong Number");
}
