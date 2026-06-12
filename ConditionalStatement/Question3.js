const getDayType = (day) => {
  // Guard clause — validate input first
  if (typeof day !== "string" || day.trim() === "") return "Invalid";

  switch (day.trim().toLowerCase()) {
    case "saturday":
    case "sunday":
      return "Weekend";

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "Weekday";

    default:
      return "Invalid";
  }
};

// Test cases
console.log(getDayType("Monday")); //* Weekday
console.log(getDayType("SATURDAY")); //** Weekend
console.log(getDayType("Holiday")); //* Invalid
console.log(getDayType("")); //* Invalid
console.log(getDayType(123)); //* Invalid
console.log(getDayType(null)); //* Invalid
