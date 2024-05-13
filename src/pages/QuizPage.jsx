import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizById } from "../api";
import { QuestionsDisplay, QuizScore, Modal } from "../components";
import { useModal } from "../hooks";

export const QuizPage = () => {
  const { id } = useParams();
  const { isOpen, toggleModal } = useModal();
  const [quiz, setQuiz] = useState({
    id: "",
    name: "",
    image_url: "",
    questions: [],
  });
  const { name, image_url } = quiz;

  useEffect(() => {
    const getQuizInfo = async () => {
      const data = await getQuizById(id);
      setQuiz(data);
    };
    getQuizInfo();
  }, [id]);

  return (
    <>
      <main className="h-[calc(100vh-200px)] flex justify-center items-center">
        <QuestionsDisplay toggleModal={toggleModal} quiz={quiz} />
        {isOpen && (
          <Modal isOpen={isOpen} toggleModal={toggleModal}>
            <QuizScore />
          </Modal>
        )}
      </main>
    </>
  );
};
