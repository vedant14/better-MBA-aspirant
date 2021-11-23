import React, { useState } from "react";
import { Wrapper } from "./styles";
import Image from "next/image";
export function Tests({
  questionCount,
  questions,
  currentQuestion,
  setCurrentQuestion,
  score,
  setScore,
  setShowScore,
}) {
  const [showAnswer, setShowAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion + 1 >= questionCount) {
      setCurrentQuestion(0);
      setShowScore(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAnswerSubmit = (answer) => {
    setSelectedAnswer(answer.id);
    if (answer.isCorrect === true) {
      setScore(score + 10);
      setShowAnswer("correct-answer");
    } else {
      setShowAnswer("incorrect-answer");
    }
  };
  return (
    <Wrapper className="Container">
      <div id="number">
        <p>
          Question:
          {currentQuestion + 1}/{questionCount}
        </p>
      </div>
      <div id="question">
        <h2>{questions[currentQuestion].questionString}</h2>
        {questions[currentQuestion].answers.map((answer) => (
          <button
            disabled={selectedAnswer !== null ? true : false}
            key={answer.id}
            className={selectedAnswer === answer.id ? showAnswer : ""}
            onClick={() => handleAnswerSubmit(answer)}
          >
            {answer.answerText}
          </button>
        ))}
        {selectedAnswer && (
          <>
            {/* TODO: Remove the extra div */}
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: questions[currentQuestion].trivia.html,
              }}
            ></div>
            {questions[currentQuestion].gif && (
              <Image
                src={questions[currentQuestion].gif.url}
                alt="Trivia"
                className={"gif-image"}
                layout="responsive"
                width={1000}
                height={400}
              />
            )}
            <div>
              <button
                className="next-button"
                onClick={() => handleNextQuestion()}
              >
                Next Question
              </button>
            </div>
          </>
        )}
      </div>
      <div id="score">
        <p>Your Score: {score}</p>
      </div>
    </Wrapper>
  );
}
