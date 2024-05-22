import { CheckedQuestionCard } from "./CheckedQuestionCard";

export const CheckedQuestionsList = ({ questions }) => {
  return (
    <div className="flex flex-col gap-2">
      {questions?.map((question) => (
        <CheckedQuestionCard key={question.question_id} {...question} />
      ))}
    </div>
  );
};
