import { useState } from "react";
import { CreateQuestionOption } from "./CreateQuestionOption";

export const CreateQuestionCard = ({ i }) => {
  // There is correct answer
  const [hasAnswer, setHasAnswer] = useState(false);

  const changeHasAnswerState = () => {
    setHasAnswer(true);
  };

  return (
    <>
      {/* Create Question Card */}
      <div className="p-4 my-5 border border-purple-400 rounded dark:bg-slate-700 dark:border-none">
        <div className="w-full">
          <label
            className="text-lg font-bold text-pink-600 dark:text-pink-500"
            htmlFor="question"
          >
            Question #{i}:{" "}
          </label>
          <input
            className="block w-full p-2 bg-purple-100 rounded text-purple-950"
            type="text"
            name="question"
            id="question"
            placeholder="Already wrote a question?"
          />
        </div>

        {/* List Options */}
        <div className="grid gap-2 mt-2 md:grid-cols-2">
          <CreateQuestionOption
            i={1}
            hasAnswer={hasAnswer}
            changeHasAnswerState={changeHasAnswerState}
          />
          <CreateQuestionOption
            i={2}
            hasAnswer={hasAnswer}
            changeHasAnswerState={changeHasAnswerState}
          />
          <CreateQuestionOption
            i={3}
            hasAnswer={hasAnswer}
            changeHasAnswerState={changeHasAnswerState}
          />
          <CreateQuestionOption
            i={4}
            hasAnswer={hasAnswer}
            changeHasAnswerState={changeHasAnswerState}
          />
        </div>
      </div>
    </>
  );
};