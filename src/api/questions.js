const baseUrl = "https://opentdb.com/api.php?";

const difficulty = {
  easy: "difficulty=easy",
  medium: "difficulty=medium",
  hard: "difficulty=hard",
};

const amount = (n) => {
  return `amount=${n}`;
};

const theme = (x) => {
  switch ("category") {
    case "books":
      return "category=10";
    case "films":
      return "category=11";
    case "tv":
      return "category=14";
    case "games":
      return "category=15";
    case "sports":
      return "category=21";
    default:
      break;
  }
};

export { difficulty, amount, theme };
