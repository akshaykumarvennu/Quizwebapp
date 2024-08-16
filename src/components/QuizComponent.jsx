import React from "react";
import "./QuizView.css";

const QuizComponent = ({ quizData, currentQuestionIndex, handleAnswerClick }) => {
  return (
    <>
      <div className="question">
        <div className="question-number">
          <span>
            Question {currentQuestionIndex + 1} / {quizData.length}
          </span>
        </div>
        <div className="question-text">
          {quizData[currentQuestionIndex].question}
        </div>
      </div>

      <div className="answer">
        {quizData[currentQuestionIndex].answers.map(({ text, isCorrect }) => (
          <button key={text} onClick={() => handleAnswerClick(isCorrect)}>
            {text}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuizComponent;
