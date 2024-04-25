import { ThemeButton } from "../components/";
import { QuizCard } from "../components/QuizCard";

export const HomePage = () => {
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
              <h1 className="text-4xl text-balance">Welcome to the QuizzApp</h1>
              <p className="text-slate-500 dark:text-slate-400">
                Pick a subject to get started!
              </p>
            </div>

            {/* List Quizzes */}
            <div className="grid gap-4">
              <QuizCard iconURL="/src/assets/html.svg" name="HTML" />
              <QuizCard iconURL="/src/assets/css.svg" name="CSS" />
              <QuizCard
                iconURL="/src/assets/javascript.svg"
                name="javascript"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
