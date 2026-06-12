//!  ISBN number check
let isbn = 8179924181;
if (String(isbn).length != 10) return console.log("Invalid ISBN Number");
let sumOfISBN = 0;
for (let i = 10; i >= 1; i--) {
  let digit = isbn % 10;
  sumOfISBN += digit * i;
  isbn = Math.floor(isbn / 10);
}
if (sumOfISBN % 11 === 0) return console.log("Number is ISBN");
else return console.log("Number is not an ISBN");
