import { useEffect, useState } from "react";
import { OptionsList, QuestionInfo, QuizNavigationButton } from "./";
import { API } from '../';

export const QuestionsDisplay = ({ toggleModal, quiz }) => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const { image_url, name, questions } = quiz;

  const onFinish = async () => {
    toggleModal(true);
  };

  useEffect(() => {
    setTotalQuestions(questions.length);
  }, [questions.length]);

  return (
    <div className="grid gap-10 mycontainer">
      <div className="flex items-center gap-2">
        <img className="size-12" src={`${API}${image_url}`} alt="Icon" />
        <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-300">
          {name}
        </h1>
      </div>

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