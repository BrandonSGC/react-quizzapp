import { useState } from "react";
import { OptionCard } from "./OptionCard";

export const OptionsList = ({ options, questionIndex }) => {
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const onSelectAnswer = (option) => {
    // Update selectedOption when an option is selected.
    setSelectedOption(option.id);

    // Validate existing question answer.
    const existingAnswerIndex = answers.findIndex(
      (ans) => ans.questionId === option.question_id
    );

    if (existingAnswerIndex !== -1) {
      setAnswers((prevAnswers) =>
        prevAnswers.map((ans, i) =>
          i === existingAnswerIndex
            ? {
                ...ans,
                selectedOptionId: option.id,
                correct: option.is_correct,
              }
            : ans
        )
      );
    } else {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          questionId: option.question_id,
          selectedOptionId: option.id,
          correct: option.is_correct,
        },
      ]);
    }
  };

  return (
    <>
      {options?.map((option, i) => {
        const isSelected =
          selectedOption === option.id ||
          (answers[questionIndex] &&
            answers[questionIndex].selectedOptionId === option.id);

        return (
          <OptionCard
            key={option.id}
            option={option}
            onSelectAnswer={onSelectAnswer}
            isSelected={isSelected}
            i={i}
          />
        );
      })}
    </>
  );
};