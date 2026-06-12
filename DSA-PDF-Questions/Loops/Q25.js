//!  Print all factors of a number
const num = 10;
const arrOfFactors = [];
for (let i = 1; i <= num; i++) {
  if (num % i === 0) arrOfFactors.push(i);
}
console.log(arrOfFactors);
