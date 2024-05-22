import { useEffect, useState } from "react";
import { useUserContext } from "../hooks";
import { getDefaultQuizzes } from "../api";
import {
  Container,
  Welcome,
  CreateQuizSection,
  QuizzesList,
} from "../components/";

export const HomePage = () => {
  const { user } = useUserContext();
  const [quizzes, setQuizzes] = useState([]);

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
        <Container>
          <div className="grid gap-5 my-5 md:my-10 md:grid-cols-2">
            <Welcome />
            <QuizzesList quizzes={quizzes} setQuizzes={setQuizzes} />
          </div>

          <CreateQuizSection />
        </Container>
      </main>
    </>
  );
};
