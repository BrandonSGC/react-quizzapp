import { useParams } from "react-router-dom";
import { ThemeButton } from "../components";
import { useEffect, useState } from "react";

export const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState({
    id: "",
    name: "",
    image_url: "",
    questions: [],
  });
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const { name, image_url, questions } = quiz;

  const onSelectAnswer = (question, option) => {
    // Check if the question already has a selected option.
    const alreadyAnswered = answers.find(
      (ans) => ans.questionId === question.id
    );

    if (alreadyAnswered) {
      // If already answered, update the answer.
      setAnswers(
        answers.map((ans) =>
          ans.questionId === question.id
            ? {
                questionId: question.id,
                selectedOptionId: option.id,
                correct: option.is_correct,
              }
            : ans
        )
      );
      return;
    }

    setAnswers([
      ...answers,
      {
        questionId: question.id,
        selectedOptionId: option.id,
        correct: option.is_correct,
      },
    ]);
  };

  useEffect(() => {
    setTotalQuestions(questions.length);
  }, [questions.length]);

  useEffect(() => {
    const getQuizInfo = async () => {
      try {
        const url = `http://localhost:3000/api/quizzes/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setQuiz(data);
      } catch (error) {
        console.error(error);
      }
    };

    getQuizInfo();
  }, []);

  return (
    <div className="">
      <header className="pt-5 mb-10 md:mb-0">
        <div className="flex justify-end mycontainer">
          <ThemeButton />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center mycontainer">
          <img className="size-20 md:size-16" src={image_url} alt="Icon" />
          <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-300">
            {name}
          </h1>
        </div>
      </header>

      <main className="my-36">
        <div className="grid gap-10 mycontainer">
          <div className="grid md:gap-x-10 gap-y-5 md:grid-cols-2">
            <div className="flex flex-col justify-between gap-5">
              <div className="grid gap-5">
                <p className="dark:text-slate-300 text-slate-600">
                  Question {index + 1} of {totalQuestions}
                </p>
                <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-100">
                  {questions[index]?.description}
                </h2>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-300 dark:bg-slate-700">
                <div className="h-2 bg-purple-500 w-[70%]"></div>
              </div>
            </div>

            <div className="grid gap-2">
              {questions[index]?.options.map((option, i) => (
                <div
                  key={option.id}
                  onClick={() => onSelectAnswer(questions[index], option)}
                  className={`flex items-center gap-2 p-3 shadow cursor-pointer md:gap-4 text-slate-600 dark:text-purple-100 rounded-xl dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-slate-200
                  ${
                    answers[index]?.selectedOptionId === option.id &&
                    "bg-slate-300 dark:bg-slate-500"
                  }`}
                >
                  <div className="w-[20%] max-w-[35px] max-h-[35px] grid text-xl font-black bg-purple-600 text-white rounded place-items-center">
                    <p>{String.fromCharCode(65 + i)}</p>
                  </div>

                  <p className="text-lg font-semibold">{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pass question buttons */}
          <div className="flex justify-center gap-2 text-center">
            {index > 0 && (
              <button
                onClick={() => setIndex(index - 1)}
                className="px-6 py-1 font-medium text-white duration-300 bg-purple-500 rounded shadow shadow-purple-900 dark:shadow-purple-700 hover:bg-purple-600 hover:shadow-purple-800"
              >
                Back
              </button>
            )}
            {index < totalQuestions - 1 && (
              <button
                onClick={() => setIndex(index + 1)}
                className="px-6 py-1 font-medium text-white duration-300 bg-purple-500 rounded shadow shadow-purple-900 dark:shadow-purple-700 hover:bg-purple-600 hover:shadow-purple-800"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
