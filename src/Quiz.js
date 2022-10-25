import React from "react";

export default function Quiz(props) {
  return (
    <div className="quiz-question">
      <h3 className="question">{props.question}</h3>
      <div className="answers">
        <input
          className="answer"
          type="radio"
          id={props.answerOne}
          name={props.selected}
          value={props.answerOne}
          checked={props.selected === props.answerOne}
          onChange={props.handleClick}
        />
        <label
          style={{
            backgroundColor:
              (props.end &&
                props.correct === props.answerOne &&
                props.selected === props.correct &&
                "#94D7A2") ||
              (props.end && props.selected === props.answerOne && "#F8BCBC") ||
              (props.end && props.correct === props.answerOne && "#94D7A2"),
            opacity: props.end && props.correct !== props.answerOne && "0.5",
          }}
          htmlFor={props.answerOne}
        >
          {props.answerOne}
        </label>
        <input
          className="answer"
          type="radio"
          id={props.answerTwo}
          name={props.selected}
          value={props.answerTwo}
          checked={props.selected === props.answerTwo}
          onChange={props.handleClick}
        />
        <label
          style={{
            backgroundColor:
              (props.end &&
                props.correct === props.answerTwo &&
                props.selected === props.correct &&
                "#94D7A2") ||
              (props.end && props.selected === props.answerTwo && "#F8BCBC") ||
              (props.end && props.correct === props.answerTwo && "#94D7A2"),
            opacity: props.end && props.correct !== props.answerTwo && "0.5",
          }}
          htmlFor={props.answerTwo}
        >
          {props.answerTwo}
        </label>
        <input
          className="answer"
          type="radio"
          id={props.answerThree}
          name={props.selected}
          value={props.answerThree}
          checked={props.selected === props.answerThree}
          onChange={props.handleClick}
        />
        <label
          style={{
            backgroundColor:
              (props.end &&
                props.correct === props.answerThree &&
                props.selected === props.correct &&
                "#94D7A2") ||
              (props.end &&
                props.selected === props.answerThree &&
                "#F8BCBC") ||
              (props.end && props.correct === props.answerThree && "#94D7A2"),
            opacity: props.end && props.correct !== props.answerThree && "0.5",
          }}
          htmlFor={props.answerThree}
        >
          {props.answerThree}
        </label>
        <input
          className="answer"
          type="radio"
          id={props.answerFour}
          name={props.selected}
          value={props.answerFour}
          checked={props.selected === props.answerFour}
          onChange={props.handleClick}
        />
        <label
          style={{
            backgroundColor:
              (props.end &&
                props.correct === props.answerFour &&
                props.selected === props.correct &&
                "#94D7A2") ||
              (props.end && props.selected === props.answerFour && "#F8BCBC") ||
              (props.end && props.correct === props.answerFour && "#94D7A2"),
            opacity: props.end && props.correct !== props.answerFour && "0.5",
          }}
          htmlFor={props.answerFour}
        >
          {props.answerFour}
        </label>
        <hr />
      </div>
    </div>
  );
}
