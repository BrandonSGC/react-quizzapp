import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizById } from "../api";
import { useModal } from "../hooks";
import { QuestionsDisplay, QuizScore, Modal, Spinner } from "../components";

export const QuizPage = () => {
  const { id } = useParams();
  const { isOpen, toggleModal } = useModal();
  const [quiz, setQuiz] = useState({
    id: "",
    name: "",
    image_url: "",
    questions: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getQuizInfo = async () => {
      setIsLoading(true);
      const data = await getQuizById(id);
      setQuiz(data);
      setIsLoading(false);
    };
    getQuizInfo();
  }, [id]);

  return (
    <>
      <main className="h-[calc(100vh-200px)] flex justify-center items-center">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <QuestionsDisplay toggleModal={toggleModal} quiz={quiz} />
            {isOpen && (
              <Modal isOpen={isOpen} toggleModal={toggleModal}>
                <QuizScore />
              </Modal>
            )}
          </>
        )}
      </main>
    </>
  );
};
