import { useEffect, useState } from "react";
import { CheckQuestionCard } from "../components";
import { useAnswersContext } from "../hooks";
import { Link, useParams } from "react-router-dom";
import { getReviewedQuiz } from "../api";

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
      <div className="mycontainer">
        {/* Quiz title*/}
        <div className="flex justify-center gap-2 mb-5 item-center">
          <img className="size-10" src={image_url} alt="Quiz icon" />
          <h2 className="text-3xl font-bold">{name}</h2>
        </div>

        {/* Score */}
        <div className="mb-5 text-center">
          <p>Your answers</p>
          <p>
            <span className="font-medium text-green-500">{score?.correctAnswers}</span> /{" "}
            <span>{score?.totalQuestions}</span> correct
          </p>
        </div>

        {/* List of checked answers Question #1 - correct / incorrect correct answers */}
        <div className="flex flex-col gap-5">
          {questions?.map((question) => (
            <CheckQuestionCard key={question.question_id} {...question} />
          ))}
        </div>

        <Link
          className="block w-32 p-2 mx-auto mt-10 font-medium text-center text-white bg-purple-500 rounded shadow hover:bg-purple-600"
          to="/"
        >
          Back to home
        </Link>
      </div>
    </>
  );
};