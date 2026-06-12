//!  Sum of even &amp; odd numbers separately
const num = 5;
let sumOfEvenNumber = 0;
let sumOfOddNumber = 0;
for (let i = 0; i <= num; i++) {
  if (i % 2 === 0) sumOfEvenNumber += i;
  else sumOfOddNumber += i;
}

console.log(sumOfEvenNumber);
console.log(sumOfOddNumber);
