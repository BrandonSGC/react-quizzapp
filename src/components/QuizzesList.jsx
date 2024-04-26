import { QuizCard } from "./QuizCard";

export const QuizzesList = ({ quizzes }) => {
  return (
    <div className="grid gap-4">
      {quizzes.map((quiz) => (
        <QuizCard
          key={quiz.id}
          {...quiz}
        />
      ))}
    </div>
  );
};
