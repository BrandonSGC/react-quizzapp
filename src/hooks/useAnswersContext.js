import { useContext } from "react";
import { AnswersContext } from "../context/AnswersContext";

export const useAnswersContext = () => {
  const { answers, setAnswers } = useContext(AnswersContext);

  return {
    answers,
    setAnswers,
  };
};
