//! Area of triangle by Heron's formula
//*  semi perimeter of the triangle (s) = 1/2(A+B+C)
//? Heron's formula = 1/2(s(s-a)(s-b)(s-c))

const prompt = require("prompt-sync")();

const firstTriangleSide = Number(prompt("Enter the First of Triangle "));
const secondTriangleSide = Number(prompt("Enter the Second of Triangle "));
const thirdTriangleSide = Number(prompt("Enter the Third of Triangle "));

const semiPerimeter =
  (1 / 2) * (firstTriangleSide + secondTriangleSide + thirdTriangleSide);

let ans =
  semiPerimeter *
  ((semiPerimeter - firstTriangleSide) *
    (semiPerimeter - secondTriangleSide) *
    (semiPerimeter - thirdTriangleSide));
const heronFormula = Math.sqrt(ans);
console.log(heronFormula.toFixed(3));
