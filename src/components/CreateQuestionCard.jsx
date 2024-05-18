import { useState } from "react";
import { CreateQuestionOption } from "./CreateQuestionOption";
import { useForm } from "../hooks";

export const CreateQuestionCard = ({ questionIndex, setForm }) => {
  // State to keep track of which option is currently checked.
  const [checkedIndex, setCheckedIndex] = useState(null);
  const { form, onInputChange } = useForm({ id: "", description: "" });

  const onSaveQuestion = () => {
    setForm((prevForm) => {
      const { questions } = prevForm;

      // Validate we dont have the question object already.
      const questionExists = questions.find((question) => question.id === questionIndex);

      if (questionExists) {
        // Update the question.
        return {
          ...prevForm,
          questions: questions.map((question) =>
            question.id === questionIndex
              ? {
                  ...question,
                  description: form.description,
                }
              : question
          ),
        };
      }

      return {
        ...prevForm,
        questions: [
          ...questions,
          {
            id: questionIndex,
            description: form.description,
            options: [],
          },
        ],
      };
    });
  };

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
            htmlFor={`description${questionIndex}`}
          >
            Question #{questionIndex}
          </label>
          <input
            className="block w-full p-2 bg-purple-100 rounded text-purple-950"
            type="text"
            name="description"
            id={`description${questionIndex}`}
            placeholder="Already wrote a question?"
            onChange={onInputChange}
            onBlur={onSaveQuestion}
          />
        </div>

        {/* List Options */}
        <div className="grid gap-2 mt-2 md:grid-cols-2">
          {[1, 2, 3, 4].map((optionIndex) => (
            <CreateQuestionOption
              key={optionIndex}
              optionIndex={optionIndex}
              questionIndex={questionIndex}
              checkedIndex={checkedIndex}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </>
  );
};
