import { QuizCard } from "./QuizCard";

export const QuizzesList = ({ quizzes, setQuizzes }) => {
  return (
    <div className="grid gap-2 p-1 overflow-y-scroll max-h-[420px] scrollbar">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} {...quiz} setQuizzes={setQuizzes} />
      ))}
    </div>
  );
};