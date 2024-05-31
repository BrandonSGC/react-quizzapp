import { useEffect, useState } from "react";
import { CreateQuestionCard, Modal, Spinner } from "../components/";
import { useForm, useModal, useSpinner, useUserContext } from "../hooks";
import { createQuiz } from "../api/";
import { Link } from "react-router-dom";
import uploadIcon from '../assets/icons/upload.svg'

const initialForm = {
  name: "",
  image: "",
  questions: [],
};

export const CreateQuizPage = () => {
  const { id } = useUserContext();
  const { form, onInputChange, setForm } = useForm(initialForm);
  const { isLoading, setIsLoading } = useSpinner(false);
  const { isOpen, toggleModal } = useModal();
  const [dataComplete, setDataComplete] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [quiz, setQuiz] = useState({});

  const onAddQuestion = (e) => {
    e.preventDefault();
    setQuestions([...questions, (questions.length += 1)]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Format quiz object.
    const quiz = {
      name: form.name.trim(),
      user_id: id,
      image: form.image,
      questions: form.questions,
    };

    const response = await createQuiz(quiz);
    setQuiz(response.quiz);
    setIsLoading(false);
    toggleModal(true);
  };

  // Validate minimun data needed for creating a new quiz.
  // (name, user_id, image, at least one question and one answer).
  useEffect(() => {
    if (form.questions.length > 0) {
      const questionHasOptions = form.questions.every(
        (question) =>
          question.options.length > 0 &&
          question.options.some((option) => option.is_correct === true)
      );
      if (form.name.trim() !== "" && id !== "" && questionHasOptions) {
        setDataComplete(true);
        return;
      }
    }
    setDataComplete(false);
  }, [form]);

  return (
    <div className="mycontainer">
      <h1 className="mb-5 text-4xl font-black text-center text-pink-500 md:text-5xl">
        Create an awesome quiz in minutes!
      </h1>

      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-end gap-2 md:flex-row">
          <div className="w-full md:w-[70%]">
            <label
              className="text-lg text-purple-900 dark:text-purple-200"
              htmlFor="name"
            >
              Title:
            </label>
            <input
              className="block w-full p-2 bg-purple-100 rounded text-purple-950"
              type="text"
              id="name"
              name="name"
              placeholder="Quiz title"
              onChange={onInputChange}
              value={form.name}
              autoComplete="off"
              required
            />
          </div>

          <div className="w-full md:w-[30%]">
            <label
              className="flex items-center justify-center gap-2 p-2 text-pink-500 bg-purple-100 border border-purple-500 rounded cursor-pointer hover:bg-purple-200 hover:text-pink-600"
              htmlFor="image"
            >
              <img
                className="size-5"
                src={uploadIcon}
                alt="upload icon"
              />
              <p>{form.image.name ? form.image.name : "Upload Image"}</p>
            </label>
            <input
              className="hidden"
              type="file"
              accept=".svg,.jpg,.png"
              id="image"
              name="image"
              onChange={onInputChange}
            />
          </div>
        </div>

        {/* List question every time you click on "Add Question" */}
        <div className="">
          {questions.map((question, i) => (
            <CreateQuestionCard
              key={question}
              questionIndex={i + 1}
              setForm={setForm}
            />
          ))}
        </div>

        {isLoading && <Spinner />}

        <div className="flex flex-col gap-2 my-5">
          <button
            className="w-full gap-2 p-2 font-semibold text-white bg-purple-500 rounded hover:bg-purple-600"
            onClick={onAddQuestion}
          >
            <p>
              <span className="text-xl">+</span> Add Question
            </p>
          </button>

          <button
            className="w-full p-2 font-semibold text-white bg-pink-500 rounded hover:bg-pink-600 disabled:hover:bg-pink-500 disabled:opacity-50"
            disabled={!dataComplete}
          >
            Create Quiz
          </button>
        </div>

        {isOpen && (
          <Modal isOpen={isOpen} toggleModal={toggleModal}>
            <div className="flex flex-col items-center justify-center p-6 w-96">
              <img
                className="max-w-[150px]"
                src="/quiz_ilustration.svg"
                alt=""
              />
              <h1 className="text-3xl font-black text-center text-purple-500">
                Quiz created successfully!
              </h1>
              <div className="flex gap-2 mt-5">
                <Link
                  className="p-2 font-medium border border-pink-400 rounded text-cyan-500 border-pink hover:bg-purple-100"
                  to="/home"
                >
                  Go to Home
                </Link>

                <Link
                  className="p-2 font-medium bg-pink-400 border rounded shadow text-white-500 border-pink hover:bg-pink-500"
                  to={`/quizzes/${quiz.id}`}
                >
                  Play Quiz
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </form>
    </div>
  );
};
