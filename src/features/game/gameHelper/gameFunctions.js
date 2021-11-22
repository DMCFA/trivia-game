////////////*GAME FUNCTIONS*/////////////////

///*imports*///
import { toast } from "react-toastify";
import { ButtonGroup, Button } from "react-bootstrap";
import { increment } from "./answerSlice";

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
  answers.forEach((el) => parseText(el));
};

///*takes an array with all the possible answers from the api and shuffles them around*///
export const shuffleAnswers = (answersArray) => {
  let arrLength = answersArray.length,
    i,
    t;
  while (arrLength) {
    i = Math.floor(Math.random() * arrLength--);
    t = answersArray[arrLength];
    answersArray[arrLength] = answersArray[i];
    answersArray[i] = t;
  }
  return answersArray;
};

///* create buttons for multiple answers* \\\
export const multipleAnswerButtons = (answers) => {
  return (
    <ButtonGroup aria-label="group of buttons" size="lg">
      <Button
        className="answers-btn"
        variant="dark"
        value={answers[0]}
        onClick={(e) => storeAnswer(e)}
      >
        {answers[0]}
      </Button>
      <Button
        className="answers-btn"
        variant="dark"
        value={answers[1]}
        onClick={(e) => storeAnswer(e)}
      >
        {answers[1]}
      </Button>
      <Button
        className="answers-btn"
        variant="dark"
        value={answers[2]}
        onClick={(e) => storeAnswer(e)}
      >
        {answers[2]}
      </Button>
      <Button
        className="answers-btn"
        variant="dark"
        value={answers[3]}
        onClick={(e) => storeAnswer(e)}
      >
        {answers[3]}
      </Button>
    </ButtonGroup>
  );
};

///* create buttons for true or false answers* \\\
export const trueOrFalseButtons = () => {
  return (
    <ButtonGroup aria-label="group of buttons" size="lg">
      <Button
        className="answers-btn-boolean"
        variant="dark"
        value="True"
        onClick={(e) => storeAnswer(e)}
      >
        True
      </Button>
      <Button
        className="answers-btn-boolean"
        variant="dark"
        value="False"
        onClick={(e) => storeAnswer(e)}
      >
        False
      </Button>
    </ButtonGroup>
  );
};

///////////////////////////////////
//store answer
//////////////////////////////////
export const storeAnswer = (e) => {
  e.preventDefault();
  const answer = e.target.value;
  return answer;
};
