import React from "react";
import Menu from "./Menu";
import Quiz from "./Quiz";
import { decode } from "html-entities";
import { nanoid } from "nanoid";
import "./style.css";

export default function App() {
  const [start, setStart] = React.useState(false);
  const [quiz, setQuiz] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [end, setEnd] = React.useState(false);
  const [newGame, setNewGame] = React.useState(false);
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  React.useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
      );
      const data = await res.json();
      let filteredData = [];
      data.results.forEach((question) => {
        filteredData.push({
          id: nanoid(),
          answers: shuffle([
            ...question.incorrect_answers,
            question.correct_answer,
          ]),
          question: question.question,
          correct: question.correct_answer,
          selected: "",
          checked: false,
        });
      });
      setQuiz(filteredData);
    }
    getData();
  }, [newGame]);

  React.useEffect(() => {
    const allChecked = quiz.every((question) => question.checked);
    if (allChecked) {
      let totalCorrect = 0;
      quiz.forEach((question) => {
        if (question.correct === question.selected) {
          totalCorrect++;
        }
        setScore(totalCorrect);
      });
    }
  }, [end]);

  function handleStart() {
    setStart(true);
    if (end) {
      setEnd(false);
      setScore(0);
      setNewGame((prevNew) => !prevNew);
    }
  }

  function handleClick(id, event) {
    setQuiz((prevQuiz) =>
      prevQuiz.map((question) => {
        return question.id === id
          ? { ...question, selected: event.target.value, checked: true }
          : question;
      })
    );
  }

  function handleSubmit(event) {
    if (quiz.every((question) => question.checked)) {
      event.preventDefault();
      setEnd(true);
      console.log(quiz);
    }
    event.preventDefault();
  }

  const quizBlock = quiz.map((item) => {
    return (
      <Quiz
        question={decode(item.question)}
        answerOne={decode(item.answers[0])}
        answerTwo={decode(item.answers[1])}
        answerThree={decode(item.answers[2])}
        answerFour={decode(item.answers[3])}
        correct={decode(item.correct)}
        end={end}
        key={nanoid()}
        id={item.id}
        selected={decode(item.selected)}
        handleClick={(event) => handleClick(item.id, event)}
      />
    );
  });

  return (
    <div className="main-content">
      {!start && <Menu handleClick={handleStart} />}
      <div className="quiz-container">
        <form onSubmit={handleSubmit}>
          {quizBlock}
          {!end && <button className="submit">Check answers</button>}
          {end && (
            <div className="end-game">
              <p>You scored {score}/5 correct answers</p>
              <button className="submit" id="play-again" onClick={handleStart}>
                Play again
              </button>
            </div>
          )}
        </form>
      </div>
      <div className="blobs">
        <img
          className="blob-one"
          src={require("./img/blob1.png")}
          alt="blob1"
        />
        <img
          className="blob-two"
          src={require("./img/blob2.png")}
          alt="blob2"
        />
      </div>
    </div>
  );
}
