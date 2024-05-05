import { useEffect, useState } from "react";

export const QuestionInfo = ({
  questionIndex,
  totalQuestions,
  description,
}) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    if (totalQuestions !== 0) {
      const result = ((questionIndex + 1) / totalQuestions) * 100;
      setProgressPercentage(Math.round(result));
    }
  }, [questionIndex, totalQuestions]);

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="grid gap-5">
        <p className="dark:text-slate-300 text-slate-600">
          Question {questionIndex + 1} of {totalQuestions}
        </p>
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-100">
          {description}
        </h2>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-300 dark:bg-slate-700">
        <div
          // I had some problems with tailwind, so I add
          // In line styles.
          className="h-2 bg-purple-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
