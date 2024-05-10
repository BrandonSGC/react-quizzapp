import { useEffect, useState } from "react";
import { OptionsList, QuestionInfo, QuizNavigationButton } from "./";
import { getQuizScore } from "../api";

export const QuestionsDisplay = ({ changeFinishState, questions }) => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const onFinish = async () => {
    changeFinishState(true);
  };

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
          onClick={() =>
            questionIndex === questions.length - 1
              ? onFinish()
              : setQuestionIndex(questionIndex + 1)
          }
          label={questionIndex === questions.length - 1 ? "Finish" : "Next"}
        />
      </div>
    </div>
  );
};