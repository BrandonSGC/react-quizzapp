import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAnswersContext } from "../hooks";
import { getReviewedQuiz } from "../api";
import {
  CheckedQuestionsList,
  Container,
  QuizNameAndIcon,
  Score,
} from "../components";

export const CheckAnswersPage = () => {
  const { id } = useParams();
  const { answers, setAnswers } = useAnswersContext();
  const [answersIds, setAnswersIds] = useState([]);
  const [reviewedQuiz, setReviewedQuiz] = useState({});

  const { score, image_url, name, questions } = reviewedQuiz;

  useEffect(() => {
    setAnswersIds(answers.map((ans) => ans.selectedOptionId));
  }, [answers]);

  useEffect(() => {
    const getQuiz = async () => {
      const response = await getReviewedQuiz(id, answersIds);
      setReviewedQuiz(response);
      setAnswers([]);
    };

    answersIds.length > 0 && getQuiz();
  }, [answersIds]);
  return (
    <>
      <Container>
        <div className="flex flex-col items-center gap-2">
          <QuizNameAndIcon
            image_url={image_url}
            name={name}
            iconClassName="size-10"
            textClassName="text-4xl font-bold"
          />
          <Score score={score} />
        </div>

        <CheckedQuestionsList questions={questions} />

        <Link
          className="block w-32 p-2 mx-auto my-10 font-medium text-center text-white bg-purple-500 rounded shadow hover:bg-purple-600"
          to="/"
        >
          Back to home
        </Link>
      </Container>
    </>
  );
};