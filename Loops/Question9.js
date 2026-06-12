function primeFactors(n) {
  if (n <= 1) return "No prime factors";
  let current = n;
  let divisor = 2;
  let ansString = "";
  while (current > 1) {
    if (current % divisor === 0) {
      ansString += divisor;
      current = current / divisor;
    } else {
      divisor++;
    }
  }
  return ansString.split("").join(" ");
}

console.log(primeFactors(19));

console.log(Math.cbrt(19));
