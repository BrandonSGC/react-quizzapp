import { QuizNavigationButton } from "./QuizNavigationButton";

export const QuizNavigation = ({
  questionIndex,
  setQuestionIndex,
  totalQuestions,
  onFinish,
}) => {
  return (
    <div className="flex justify-center gap-2 text-center">
      <QuizNavigationButton
        disabled={questionIndex === 0}
        onClick={() => setQuestionIndex(questionIndex - 1)}
        label="Back"
      />
      <QuizNavigationButton
        onClick={() =>
          questionIndex === totalQuestions - 1
            ? onFinish()
            : setQuestionIndex(questionIndex + 1)
        }
        label={questionIndex === totalQuestions - 1 ? "Finish" : "Next"}
      />
    </div>
  );
};
