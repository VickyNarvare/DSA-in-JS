//!  Voter eligibility check

const prompt = require("prompt-sync")();
const userDOB = Number(prompt("Enter Your DOB:  "));

//* Get Current date
const now = new Date();
const currentYear = now.getFullYear();
const userAge = currentYear - userDOB;

const voterEligibilityChecker = () => {
  if (currentYear > userDOB && 1900 < userDOB) {
    return userAge > 18
      ? `Your age is ${userAge} you can vote`
      : "you can't vote";
  } else return "Invalid Age, Please Try Again!";
};

const result = voterEligibilityChecker();
console.log(result);
