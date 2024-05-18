export const CreateQuestionOption = ({
  questionIndex,
  optionIndex,
  checkedIndex,
  handleCheckboxChange,
}) => {
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
              name={`option${optionIndex}`}
              id={`option${optionIndex}-${questionIndex}`}
              placeholder="Already wrote an option?"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor={`answer${optionIndex}-${questionIndex}`}>
              Correct answer:
            </label>
            <input
              className="text-pink-600 bg-gray-100 border-gray-300 rounded size-4 focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              id={`answer${optionIndex}-${questionIndex}`}
              name={`answer${optionIndex}`}
              type="checkbox"
              checked={checkedIndex === optionIndex}
              onChange={() => handleCheckboxChange(optionIndex)}
              disabled={checkedIndex !== null && checkedIndex !== optionIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
};