let fec = 1;
let n = 4;
function fect() {
  for (let i = 1; i <= n; i++) {
    fec *= i;
  }
  return fec;
}
console.log(fect());
