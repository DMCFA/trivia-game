import axios from "axios";

export const baseUrl = "https://opentdb.com/api.php?";

export const difficulty = {
  easy: "difficulty=easy",
  medium: "difficulty=medium",
  hard: "difficulty=hard",
};

export const amount = (n) => {
  return `amount=${n}`;
};

export const theme = (x) => {
  switch ("category") {
    case "books":
      return "category=10";
    case "movies":
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

async function getData(amount, difficulty, theme) {
  try {
    const response = await axios.get(
      `${baseUrl}${difficulty}${amount}${theme}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default getData;
