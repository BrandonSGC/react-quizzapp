import { useEffect, useState } from "react";
import { useUserContext } from "../hooks";
import { getDefaultQuizzes } from "../api";
import {
  Container,
  Welcome,
  CreateQuizSection,
  QuizzesList,
  Spinner,
} from "../components/";

export const HomePage = () => {
  const { user } = useUserContext();
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getQuizzes = async () => {
      setIsLoading(true);
      const data = await getDefaultQuizzes(user?.id);
      setQuizzes(data);
      setIsLoading(false);
    };
    getQuizzes();
  }, [user]);

  return (
    <>
      <main className="grid place-items-center">
        <Container>
          <div className="grid gap-5 my-5 md:my-10 md:grid-cols-2">
            <Welcome />
            {isLoading ? (
              <Spinner />
            ) : (
              <QuizzesList quizzes={quizzes} setQuizzes={setQuizzes} />
            )}
          </div>

          <CreateQuizSection />
        </Container>
      </main>
    </>
  );
};
