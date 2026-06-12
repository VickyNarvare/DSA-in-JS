function checkAbundant(n) {
  let sumOfDivisor = 0;
  for (let i = 0; i <= n / 2; i++) {
    if (n % i == 0) {
      sumOfDivisor += i;
    }
  }
  return sumOfDivisor > n;
}
console.log(checkAbundant(12));
