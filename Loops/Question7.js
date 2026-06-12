let num = 8175257660;
let sum = 0;
let place = 10;
while (num > 0) {
  digit = num % 10;
  sum += digit * place;
  place--;
  num = Math.floor(num / 10);
  console.log(sum, digit);
}
console.log(sum % 11);
