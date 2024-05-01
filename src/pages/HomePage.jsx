import { useEffect, useState } from "react";
import { ThemeButton, QuizzesList } from "../components/";
import { getDefaultQuizzes } from "../helpers";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const getQuizzes = async () => {
      const data = await getDefaultQuizzes();
      setQuizzes(data);
    };

    getQuizzes();
  }, []);

  return (
    <>
      <header className="">
        <div className="mycontainer">
          <div className="flex justify-end py-5">
            <ThemeButton />
          </div>
        </div>
      </header>

      <main className="grid h-full place-items-center">
        <div className="mycontainer">
          <div className="grid gap-5 my-10 md:grid-cols-2">
            {/* Welcome */}
            <div className="space-y-5">
              <h1 className="text-5xl font-black text-purple-700 dark:text-purple-100 text-balance">
                Welcome to the QuizzApp
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-300">
                Pick a subject to get started!
              </p>
            </div>

            <QuizzesList quizzes={quizzes} />
          </div>
        </div>
      </main>
    </>
  );
};
