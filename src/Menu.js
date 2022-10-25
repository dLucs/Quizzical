import React from "react";

export default function Menu(props) {
  return (
    <div className="front-page">
      <h1 className="title">Quizzical</h1>
      <p>Test your knowledge on this infinite Quiz App</p>
      <button className="start" onClick={props.handleClick}>
        Start Quiz
      </button>
    </div>
  );
}
