import { useState } from "react";
import { CreateQuestionOption } from "./CreateQuestionOption";

export const CreateQuestionCard = ({ i }) => {
  // State to keep track of which option is currently checked.
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleCheckboxChange = (index) => {
    if (checkedIndex === index) {
      // Uncheck if the same checkbox is clicked again.
      setCheckedIndex(null);
      return;
    }
    setCheckedIndex(index);
  };

  return (
    <>
      {/* Create Question Card */}
      <div className="p-4 my-5 border border-purple-400 rounded dark:bg-slate-700 dark:border-none">
        <div className="w-full">
          <label
            className="text-xl font-bold text-pink-600 dark:text-pink-500"
            htmlFor="question"
          >
            Question #{i}
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
          {[1, 2, 3, 4].map((optionIndex) => (
            <CreateQuestionOption
              key={optionIndex}
              i={optionIndex}
              checkedIndex={checkedIndex}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </>
  );
};