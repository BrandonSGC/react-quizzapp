import { Link } from "react-router-dom";
import { DeleteIcon } from "../../assets";
import { useModal } from "../../hooks";
import { Modal, QuizNameAndIcon, Spinner } from "../common";
import { deleteQuizById } from "../../api";
import { useState } from "react";

export const QuizCard = ({ id, image_url, name, user_id, setQuizzes }) => {
  const { isOpen, toggleModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);

  const onDeleteQuiz = async () => {
    setIsLoading(true);
    const response = await deleteQuizById(id);
    if (response.statusCode === 200) {
      setQuizzes((prevQuizzes) => prevQuizzes.filter((quiz) => quiz.id !== id));
    }
    toggleModal();
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-2 p-3 duration-300 bg-white rounded-lg shadow-md cursor-pointer text-slate-600 dark:text-purple-100 dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-purple-200">
        <Link
          to={`quizzes/${id}`}
          className="flex items-center flex-grow gap-2"
        >
          <QuizNameAndIcon
            image_url={image_url}
            name={name}
            iconClassName="size-10"
            textClassName="text-xl font-medium"
          />
        </Link>
        {user_id && (
          <DeleteIcon
            onClick={toggleModal}
            className="text-red-500 size-6 hover:scale-110"
          />
        )}
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} toggleModal={toggleModal}>
          <div className="flex flex-col justify-center h-64 gap-2 p-6 text-black w-72 max-w-80">
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <DeleteIcon className="mx-auto text-red-500 size-20" />
                <p className="text-lg text-center">
                  Are you sure you want to delete this quiz?
                </p>
                <div className="flex gap-2">
                  <button
                    className="w-full px-4 py-2 text-black bg-gray-300 rounded-lg hover:text-white hover:bg-gray-400"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                    onClick={onDeleteQuiz}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};
