import { createContext, useState } from "react";

export const AnswersContext = createContext();

export const AnswersProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      {children}
    </AnswersContext.Provider>
  );
};
