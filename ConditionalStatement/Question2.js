//! Using if/else
// function getGrade(score) {
//   if (typeof score !== "number" || isNaN(score)) return "Invalid";
//   if (score < 0 || score > 100) return "Invalid";

//   if (score >= 90) return "A";
//   else if (score >= 80) return "B";
//   else if (score >= 70) return "C";
//   else if (score >= 60) return "D";
//   else return "F";
// }

//! Using switch case
function getGradeSwitch(score) {
  if (typeof score !== "number" || isNaN(score)) return "Invalid";
  if (score < 0 || score > 100) return "Invalid";

  const band = Math.floor(score / 10);

  switch (true) {
    case band === 10:
    case band === 9:
      return "A";
    case band === 8:
      return "B";
    case band === 7:
      return "C";
    case band === 6:
      return "D";
    default:
      return "F";
  }
}
