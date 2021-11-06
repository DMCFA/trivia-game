////////////*GAME FUNCTIONS*/////////////////

///*imports*///
import { toast } from "react-toastify";
import { hasRequestFailed } from "../../../api/questions";

///*call and parse next question to be displayed*///
export const nextQuestion = (allQuestions, questionNum) => {
  const parser = new DOMParser();
  if (allQuestions.length === 0) {
    toast.info("Loading...");
  } else {
    const question = allQuestions[questionNum].question;
    const parsedQuestion = parser.parseFromString(question, "text/html").body
      .textContent;
    return parsedQuestion;
  }
};

///*takes an array with all the possible answers from the api and shuffles them around*///
export const shuffleAnswers = (answersArray) => {
  let arrLength = answersArray.length,
    i,
    t;
  while (arrLength) {
    i = Math.floor(Math.random() * arrLength--);
    t = answersArray[arrLength];
    answersArray[t] = answersArray[i];
    answersArray[i] = t;
  }
  return answersArray;
};
