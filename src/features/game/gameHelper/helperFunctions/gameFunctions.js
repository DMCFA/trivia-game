////////////*GAME FUNCTIONS*/////////////////

///*imports*///
import { toast } from "react-toastify";

//*parse questions and answers*\\
export const parseText = (text) => {
  const parser = new DOMParser();
  return parser.parseFromString(text, "text/html").body.textContent;
};

///*call and parse next question to be displayed*///
export const nextQuestion = (allQuestions, questionNum) => {
  if (allQuestions.length === 0) {
    toast.info("Loading...");
  } else {
    const question = allQuestions[questionNum].question;
    return parseText(question);
  }
};

///*parse answers*\\\
export const nextAnswer = (answers) => {
  const parsedAnswers = [];
  answers.forEach((el) => parsedAnswers.push(parseText(el)));
  return parsedAnswers;
};

///*takes an array with all the possible answers from the api and shuffles them around*///
export const shuffleAnswers = (answersArray) => {
  const answers = nextAnswer(answersArray);
  let arrLength = answers.length,
    i,
    t;
  while (arrLength) {
    i = Math.floor(Math.random() * arrLength--);
    t = answers[arrLength];
    answers[arrLength] = answers[i];
    answers[i] = t;
  }
  return answers;
};
