import { useState } from "react";
import { CreateQuestionCard } from "../components/CreateQuestionCard";
import { useForm, useSpinner, useUserContext } from "../hooks";

export const CreateQuizPage = () => {
  const { id, name } = useUserContext();
  const { form, onInputChange, onInputFileChange, setForm } = useForm({
    name: '',
    user_id: id,
    image: "Upload Image",
    questions: [],
  });
  const { isLoading, setIsLoading } = useSpinner();
  const [dataComplete, setDataComplete] = useState(false);
  const [questions, setQuestions] = useState([]);

  const onAddQuestion = (e) => {
    e.preventDefault();
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
              <p>{form.image}</p>
            </label>
            <input
              className="hidden"
              type="file"
              accept=".svg,.jpg,.png"
              id="image"
              name="image"
              onChange={onInputFileChange}
            />
          </div>
        </div>

        {/* List question every time you click on "Add Question" */}
        <div className="">
          {questions.map((question, i) => (
            <CreateQuestionCard key={question} i={i + 1} setForm={setForm} />
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
          className="w-full p-2 my-3 font-semibold text-white bg-pink-500 rounded hover:bg-pink-600 disabled:hover:bg-pink-500 disabled:opacity-50"
          disabled={!dataComplete}
        >
          Create Quiz
        </button>

        {isLoading && <Spinner />}
      </form>
    </div>
  );
};
