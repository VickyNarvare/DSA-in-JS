const calculate = (a, operator, b) => {
  // Step 1 — Validate inputs
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return "Error: Invalid input";
  }

  // Step 2 — Perform operation
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) return "Error: Division by zero";
      result = a / b;
      break;
    case "%":
      if (b === 0) return "Error: Division by zero";
      result = a % b;
      break;
    case "**":
      result = a ** b;
      break;
    default:
      return "Error: Invalid operator";
  }

  // Step 3 — Round result to 2 decimal places
  return parseFloat(result.toFixed(2));
};

// Test cases
console.log(calculate(10, "+", 5)); // → 15
console.log(calculate(10, "/", 0)); // → "Error: Division by zero"
console.log(calculate(10, "/", 3)); // → 3.33
console.log(calculate(5, "**", 3)); // → 125
console.log(calculate(10, "$", 5)); // → "Error: Invalid operator"
console.log(calculate("a", "+", 5)); // → "Error: Invalid input"
console.log(calculate(10, "%", 3)); // → 1
