import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizById } from "../helpers";
import { QuestionsDisplay, QuizHeader } from "../components";

export const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState({
    id: "",
    name: "",
    image_url: "",
    questions: [],
  });
  const { name, image_url, questions } = quiz;

  useEffect(() => {
    const getQuizInfo = async () => {
      const data = await getQuizById(id);
      setQuiz(data);
    };
    getQuizInfo();
  }, [id]);

  return (
    <>
      <QuizHeader image_url={image_url} name={name} />
      <main className="my-36">
        <QuestionsDisplay questions={questions} />
      </main>
    </>
  );
};
