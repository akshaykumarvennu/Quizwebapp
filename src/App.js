import { useState } from "react";
import "./App.css";
import QuizComponent from "./components/QuizComponent";
import ScoreComponent from "./components/ScoreComponent";

function App() {
  const quizData = [
    {
      question: "What is the capital of Australia?",
      answers: [{ text: "Sydney" }, { text: "Brisbane" }, { text: "Canberra", isCorrect: true }],
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Ag" },
        { text: "Au", isCorrect: true },
        { text: "Fe" },
        { text: "Hg" },
      ],
    },
    {
      question: "Who was the first President of India.?",
      answers: [
        { text: "Thomas Jefferson" },
        { text: "John Adams" },
        { text: "Abraham Lincoln" },
        { text: "Rajendra Prasad", isCorrect: true },
      ],
    },
    {
      question: "In what year was the first iPhone released?",
      answers: [
        { text: "2005" },
        { text: "2007", isCorrect: true },
        { text: "2010" },
        { text: "2012" },
      ],
    },
    {
      question: "Which film won the Academy Award for Best Picture in 2020?",
      answers: [
        { text: "Parasite", isCorrect: true },
        { text: "1917" },
        { text: "Joke" },
        { text: "Once Upon a Time in Hollywood" },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [userScore, setUserScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setUserScore(userScore + 1);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) setCurrentQuestionIndex(nextQuestionIndex);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: userScore not resetting
    setUserScore(0);

    setCurrentQuestionIndex(0);
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreComponent handleResetClick={handleResetClick} userScore={userScore} />
      ) : (
        <QuizComponent
          quizData={quizData}
          currentQuestionIndex={currentQuestionIndex}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;
