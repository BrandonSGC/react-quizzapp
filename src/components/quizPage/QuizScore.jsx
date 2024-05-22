import { useEffect, useState } from "react";
import { useAnswersContext } from "../../hooks";
import { getQuizScore } from "../../api";
import { Link, useParams } from "react-router-dom";

const initialScore = {
  totalScore: 0,
  correctAnswers: 0,
  totalQuestions: 0,
}

export const QuizScore = () => {
  const [answersIds, setAnswersIds] = useState([]);
  const [score, setScore] = useState(initialScore);

  const { id } = useParams();
  const { answers } = useAnswersContext();
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

  return (
    <div className="flex flex-col gap-3 p-8 text-center text-purple-600 rounded shadow-xl ">
      <h3 className="text-2xl font-medium text-black">Your total score is</h3>
      <span className="block font-bold text-7xl">{totalScore}</span>
      <p className="text-xl text-black">
        <span className="font-bold text-purple-950">{correctAnswers}</span>{" "}
        correct answers out of{" "}
        <span className="font-bold text-purple-950">{totalQuestions}</span>
      </p>
      <Link 
        className="p-2 font-medium text-white bg-purple-500 rounded hover:bg-purple-600"
        to={`/quizzes/${id}/answers`}
      >
        Check answers
      </Link>
    </div>
  );
};
