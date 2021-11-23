import React, { useState } from "react";
import { Wrapper } from "./styles";
import { Outcome } from "../Outcome";
import { Tests } from "../Tests";
import { StartTest } from "../StartTest";

export function ViewTest({ test }) {
  const [showScore, setShowScore] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = test.testquestions;
  const questionCount = test.testquestions.length;
  return (
    <div>
      {startQuiz === false ? (
        <StartTest
          setStartQuiz={setStartQuiz}
          title={test.title}
          description={test.description}
        />
      ) : (
        [
          showScore === true ? (
            <Outcome
              key="outcome"
              score={score}
              title={test.title}
              testId={test.id}
              setCurrentQuestion={setCurrentQuestion}
              setScore={setScore}
              setShowScore={setShowScore}
            />
          ) : (
            <Tests
              key="test"
              questionCount={questionCount}
              questions={questions}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              score={score}
              setScore={setScore}
              setShowScore={setShowScore}
            />
          ),
        ]
      )}
    </div>
  );
}
