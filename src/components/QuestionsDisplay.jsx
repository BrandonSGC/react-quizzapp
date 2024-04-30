import { useEffect, useState } from "react";
import { OptionsList, QuestionInfo, QuizNavigationButton } from "./";

export const QuestionsDisplay = ({ questions }) => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    setTotalQuestions(questions.length);
  }, [questions.length]);

  return (
    <div className="grid gap-10 mycontainer">
      <div className="grid md:gap-x-10 gap-y-5 md:grid-cols-2">
        <QuestionInfo 
          totalQuestions={totalQuestions} 
          questionIndex={questionIndex} 
          description={questions[questionIndex]?.description}
        />
        
        <div className="grid gap-2">
          <OptionsList
            options={questions[questionIndex]?.options}
            questionIndex={questionIndex}
            questions={questions}
          />
        </div>
      </div>

      <div className="flex justify-center gap-2 text-center">
        <QuizNavigationButton
          disabled={questionIndex === 0}
          onClick={() => setQuestionIndex(questionIndex - 1)}
          label="Back"
        />
        <QuizNavigationButton
          disabled={questionIndex === questions.length - 1}
          onClick={() => setQuestionIndex(questionIndex + 1)}
          label="Next"
        />
      </div>
    </div>
  );
};
