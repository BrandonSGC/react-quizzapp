import { useState } from "react";
import { OptionCard } from "./OptionCard";
import { useAnswersContext } from "../../hooks";

export const OptionsList = ({ options, questionIndex }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { answers, setAnswers } = useAnswersContext();

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