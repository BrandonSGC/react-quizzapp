import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks";
import { createNotification } from "../../helpers";

export const CreateQuizButton = () => {
  const { isAuthenticated } = useUserContext();
  const navigate = useNavigate();

  const onCreateQuiz = () => {
    if (!isAuthenticated) {
      createNotification("You must be logged in to create a quiz.", "warning");
      navigate("/login");
      return;
    }
    navigate("/quizzes/create-quiz");
  };

  return (
    <button
      className="px-10 py-2 mx-auto shadow my-5 font-medium text-white border border-purple-500 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-wiggle animate-infinite animate-duration-[3000ms]"
      onClick={onCreateQuiz}
    >
      Create Quiz
    </button>
  );
};