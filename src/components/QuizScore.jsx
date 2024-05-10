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
    console.log("");
    // navigate('/answers')
  };

  return (
    <div className="flex flex-col gap-3 p-8 text-center shadow-xl rounded-xl">
      <h3 className="text-2xl font-medium">Your total score is</h3>
      <span className="block font-bold text-purple-800 dark:text-purple-300 text-7xl">{totalScore}</span>
      <p className="text-xl">
        <span>{correctAnswers}</span> correct answers out of{" "}
        <span>{totalQuestions}</span>
      </p>
      <button
        className="p-2 font-medium text-white bg-purple-500 rounded hover:bg-purple-600 dark:hover:bg-purple-400"
        onClick={onCheckAnswers}
      >
        Check answers
      </button>
    </div>
  );
};