//! Counting number of days in a month
const prompt = require("prompt-sync")();
const year = Number(prompt("Enter Year:  "));
const month = Number(prompt("Enter Month in Numbers:  "));
if (month > 12) return console.log("Invalid Month");
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`${year} ke ${month} me 31 din hai`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`${year} ke ${month} me 30 din hai`);
    break;
  default:
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? console.log("In a leap year, February has 29 days.")
      : console.log("February has 28 days.");
}
