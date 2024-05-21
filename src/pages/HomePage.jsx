import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CreateQuizButton, QuizzesList } from "../components/";
import { getDefaultQuizzes, logout } from "../api";
import { useUserContext } from "../hooks";
import { createNotification } from "../helpers";

export const HomePage = () => {
  const { user, setUser, isAuthenticated, name, initialState } = useUserContext();
  const [quizzes, setQuizzes] = useState([]);

  const onLogout = async () => {
    // TODO: Alert to confirm logout.

    const response = await logout();
    if (response.status === 200) {
      createNotification("Logout succesfully", "success");
      setUser(initialState);
      return;
    }
    createNotification("Error ocurred while loggin out", "error");
  };

  useEffect(() => {
    const getQuizzes = async () => {
      const data = await getDefaultQuizzes(user?.id);
      setQuizzes(data);
    };
    getQuizzes();
  }, [user]);

  return (
    <>
      <main className="grid place-items-center">
        <div className="mycontainer">
          <div className="grid gap-5 my-5 md:my-10 md:grid-cols-2">
            {/* Welcome */}
            <div className="space-y-5">
              <h1 className="text-6xl font-black text-purple-700 dark:text-purple-100 text-balance">
                Welcome to the QuizzApp
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-300">
                Hey there{isAuthenticated && ` ${name}`}, pick a subject to get
                started!
              </p>
              <div className="flex items-center gap-2">
                {isAuthenticated ? (
                  <button
                    onClick={onLogout}
                    className="px-4 py-1 font-medium text-purple-500 bg-white border border-purple-500 rounded shadow hover:bg-gray-100"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      to={"/login"}
                      className="px-4 py-1 font-medium text-purple-500 bg-white border border-purple-500 rounded shadow hover:bg-gray-100"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="px-4 py-1 font-medium text-white bg-purple-500 rounded shadow hover:bg-purple-600"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>

            <QuizzesList quizzes={quizzes} setQuizzes={setQuizzes} />
          </div>

          {/* Create quiz Navigation. */}
          <div className="mt-6 md:mt-16">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-5xl font-black text-center text-pink-500">
                Create your own quiz now{isAuthenticated && ` ${user.name}`}!
              </h3>
              <div className="grid place-items-center">
                <CreateQuizButton />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
