import { useEffect, useState } from "react";
import { useAnswersContext } from "../hooks";
import { getQuizScore } from "../api";
import { useParams } from "react-router-dom";

export const QuizScore = () => {
  const { answers } = useAnswersContext();
  const { id } = useParams();

  const [answersIds, setAnswersIds] = useState([]);
  const [score, setScore] = useState({
    totalScore: 0,
    correctAnswers: 0,
    totalQuestions: 0,
  });
  const { totalScore, correctAnswers, totalQuestions } = score;

  useEffect(() => {
    setAnswersIds(answers.map((ans) => ans.selectedOptionId));
  }, [answers]);

  useEffect(() => {
    const sendAnswers = async () => {
      const response = await getQuizScore(id, answersIds);
      setScore(response.result);
    };

    answersIds.length > 0 && sendAnswers();
  }, [answersIds]);

  const onCheckAnswers = () => {
    // TODO: show correct answers.
  };

  return (
    <div className="flex flex-col gap-3 p-8 text-center text-purple-600 rounded shadow-xl ">
      <h3 className="text-2xl font-medium text-black">Your total score is</h3>
      <span className="block font-bold text-7xl">{totalScore}</span>
      <p className="text-xl text-black">
        <span className="font-bold text-purple-950">{correctAnswers}</span> correct answers out of{" "}
        <span className="font-bold text-purple-950">{totalQuestions}</span>
      </p>
      <button
        className="p-2 font-medium text-white bg-purple-500 rounded hover:bg-purple-600"
        onClick={onCheckAnswers}
      >
        Check answers
      </button>
    </div>
  );
};