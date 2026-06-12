//! Prime number check
const num = 2;
const factor = [];
for (let i = 1; i <= num; i++) {
  if (num % i === 0) factor.push(i);
}
const prime = factor.length === 2 ? "number is prime" : "number is not prime";
console.log(prime);
