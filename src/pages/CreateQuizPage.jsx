import { useState } from "react";
import { CreateQuestionCard } from "../components/CreateQuestionCard";
import { useForm, useSpinner } from "../hooks";

const initialState = {
  title: "New Quiz",
  user_id: "1",
  image: "/img/quiz_ilustration.svg",
  questions: [
    {
      description: "question 1",
      options: [
        {
          description: "Option 1",
          is_correct: false,
        },
        {
          description: "Option 2",
          is_correct: true,
        },
        {
          description: "Option 3",
          is_correct: false,
        },
        {
          description: "Option 4",
          is_correct: false,
        },
      ],
    },
  ],
};

export const CreateQuizPage = () => {
  const { onInputChange, form } = useForm(initialState);
  const { isLoading, setIsLoading } = useSpinner();
  const [dataComplete, setDataComplete] = useState(false);
  const [questions, setQuestions] = useState([]);

  const onAddQuestion = (e) => {
    e.preventDefault();
    console.log("Adding Question");
    setQuestions([...questions, (questions.length += 1)]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Creating Quiz");
  };

  return (
    <div className="mycontainer">
      <h1 className="my-10 text-4xl font-black text-center text-pink-500 md:text-5xl">
        Create an awesome quiz in minutes!
      </h1>

      <form onSubmit={onSubmit} className="">
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
                src="/icons/upload.svg"
                alt="upload icon"
              />
              <p>Upload Image</p>
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
            <CreateQuestionCard key={question} i={i + 1} />
          ))}
        </div>

        <button
          className="w-full gap-2 p-2 mt-2 font-semibold text-white bg-purple-500 rounded hover:bg-purple-600"
          onClick={onAddQuestion}
        >
          <p>
            <span className="text-xl">+</span> Add Question
          </p>
        </button>

        <button
          className="w-full p-2 my-3 font-semibold text-white bg-purple-500 rounded hover:bg-purple-600 disabled:opacity-50"
          disabled={!dataComplete}
        >
          Create Quiz
        </button>

        {isLoading && <Spinner />}
      </form>
    </div>
  );
};