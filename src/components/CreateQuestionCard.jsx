import { useState } from "react";
import { CreateQuestionOption } from "./CreateQuestionOption";
import { useForm } from "../hooks";

export const CreateQuestionCard = ({ questionIndex, setForm }) => {
  const { form, onInputChange } = useForm({ id: "", description: "" });
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

  const updateOptionInForm = (updatedOption) => {
    // Update the form state with the new or updated option.
    setForm((prevForm) => {
      const { questions } = prevForm;
  
      // Map through the questions to find the one that matches 
      // the current questionIndex.
      const updatedQuestions = questions.map((question) => {
        if (question.id === questionIndex) {
          // Get the options of the current question or initialize 
          // an empty array.
          const options = question.options || []; 
          // Check if the option already exists.
          const optionExists = options.find(
            (option) => option.id === updatedOption.id
          );
  
          let newOptions;
          if (optionExists) {
            // If the option exists, update it
            newOptions = options.map((option) =>
              option.id === updatedOption.id ? updatedOption : option
            );
          } else {
            // If the option does not exist, add it to the options array.
            newOptions = [...options, updatedOption];
          }
  
          // Return the updated question with the new or updated options.
          return {
            ...question,
            description: form.description.trim(),
            options: newOptions,
          };
        }
        // Return the question unchanged if it does not match the questionIndex.
        return question; 
      });
  
      // Return the updated form state with the modified questions array.
      return {
        ...prevForm,
        questions: updatedQuestions,
      };
    });
  };
  

  const onSaveQuestion = () => {
    // Validate the question description is not empty.
    if (form.description.trim() === '') return;

    // Update the form state with the new or updated question description.
    setForm((prevForm) => {
      const { questions } = prevForm;

      // Check if the question already exists
      const questionExists = questions.find(
        (question) => question.id === questionIndex
      );
  
      if (questionExists) {
        // If the question exists, update its description.
        return {
          ...prevForm,
          questions: questions.map((question) =>
            question.id === questionIndex
              ? {
                  ...question,
                  description: form.description.trim(),
                }
              : question
          ),
        };
      }
  
      // If the question does not exist, add it to the questions array.
      return {
        ...prevForm,
        questions: [
          ...questions,
          {
            id: questionIndex,
            description: form.description.trim(),
            options: [],
          },
        ],
      };
    });
  };
  

  return (
    <>
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
              updateOptionInForm={updateOptionInForm}
            />
          ))}
        </div>
      </div>
    </>
  );
};