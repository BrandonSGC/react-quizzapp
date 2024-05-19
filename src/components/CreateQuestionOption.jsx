import { useState } from "react";

export const CreateQuestionOption = ({
  questionIndex,
  optionIndex,
  checkedIndex,
  handleCheckboxChange,
  updateOptionInForm,
}) => {
  const [option, setOption] = useState({
    id: optionIndex,
    description: "",
    is_correct: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updatedOption = {
      ...option,
      [name]: type === "checkbox" ? checked : value,
    };

    setOption(updatedOption);
    updateOptionInForm(updatedOption);
  };

  return (
    <>
      <div className="p-4 space-y-2 border border-purple-300 rounded">
        <div className="flex flex-col gap-2">
          <div>
            <label htmlFor={`option${optionIndex}-${questionIndex}`}>
              Option #{optionIndex}:{" "}
            </label>
            <input
              className="block w-full p-2 bg-purple-100 rounded text-purple-950"
              type="text"
              name="description"
              id={`option${optionIndex}-${questionIndex}`}
              placeholder="Already wrote an option?"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor={`answer${optionIndex}-${questionIndex}`}>
              Correct answer:
            </label>
            <input
              className="text-pink-600 bg-gray-100 border-gray-300 rounded size-4 focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              id={`answer${optionIndex}-${questionIndex}`}
              name="is_correct"
              type="checkbox"
              checked={checkedIndex === optionIndex}
              onChange={(e) => {
                handleCheckboxChange(optionIndex);
                handleChange({
                  target: {
                    name: "is_correct",
                    value: e.target.checked,
                    type: "checkbox",
                    checked: e.target.checked,
                  },
                });
              }}
              disabled={checkedIndex !== null && checkedIndex !== optionIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
};