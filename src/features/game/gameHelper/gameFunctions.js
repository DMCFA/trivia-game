////////////*GAME FUNCTIONS*/////////////////

///*imports*///
import { toast } from "react-toastify";
import { ButtonGroup, Button } from "react-bootstrap";

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
    answersArray[t] = answersArray[i];
    answersArray[i] = t;
  }
  return answersArray;
};

export const multipleAnswerButtons = (answers) => {
  return (
    <ButtonGroup aria-label="group of buttons" size="lg">
      <Button
        className="answers-btn"
        variant="success"
        value={answers[0]}
        onClick={(e) => e.target.value}
      >
        {answers[0]}
      </Button>
      <Button
        className="answers-btn"
        variant="success"
        value={answers[1]}
        onClick={(e) => e.target.value}
      >
        {answers[1]}
      </Button>
      <Button
        className="answers-btn"
        variant="success"
        value={answers[2]}
        onClick={(e) => e.target.value}
      >
        {answers[2]}
      </Button>
      <Button
        className="answers-btn"
        variant="success"
        value={answers[3]}
        onClick={(e) => e.target.value}
      >
        {answers[3]}
      </Button>
    </ButtonGroup>
  );
};

export const trueOrFalseButtons = (answers) => {
  return (
    <ButtonGroup aria-label="group of buttons" size="lg">
      <Button
        className="answers-btn"
        variant="success"
        value={answers[0]}
        onClick={(e) => e.target.value}
      >
        {answers[0]}
      </Button>
      <Button
        className="answers-btn"
        variant="success"
        value={answers[1]}
        onClick={(e) => e.target.value}
      >
        {answers[1]}
      </Button>
    </ButtonGroup>
  );
};
