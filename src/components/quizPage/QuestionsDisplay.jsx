import { useEffect, useState } from "react";
import {
  Container,
  OptionsList,
  QuestionInfo,
  QuizNavigation,
} from "..";
import { QuizNameAndIcon } from '../common';

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
    <Container className="grid gap-10">
      <QuizNameAndIcon image_url={image_url} name={name} iconClassName="size-12" textClassName="text-4xl font-bold"/>

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

      <QuizNavigation
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        totalQuestions={totalQuestions}
        onFinish={onFinish}
      />
    </Container>
  );
};
