//! Leap year check
const year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
  console.log("Yes");
else console.log("No");
