import axios from "axios";

const baseUrl = "https://opentdb.com/api.php?";

const difficultyChosen = (choice) => {
  return `difficulty=${choice}`;
};

const amountChosen = (choice) => {
  return `amount=${choice}`;
};

const themeChosen = (choice) => {
  switch (choice) {
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

export let hasRequestFailed = false;

export async function getData(amount, theme, difficulty) {
  difficulty = difficultyChosen(difficulty);
  amount = amountChosen(amount);
  theme = themeChosen(theme);
  try {
    const response = await axios.get(
      `${baseUrl}${amount}&${theme}&${difficulty}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    hasRequestFailed = true;
  }
}
