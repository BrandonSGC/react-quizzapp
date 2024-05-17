export const CreateQuestionOption = ({
  i,
  hasAnswer,
  changeHasAnswerState,
}) => {
  return (
    <>
      <div className="p-4 space-y-2 border border-purple-300 rounded">
        <div className="flex flex-col gap-2">
          <div>
            <label htmlFor={`option${i}`}>Option #{i}: </label>
            <input
              className="block w-full p-2 bg-purple-100 rounded text-purple-950"
              type="text"
              name={`option${i}`}
              id={`option${i}`}
              placeholder="Already wrote an option?"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor={`answer${i}`}>Correct answer:</label>
            <input
              className="text-pink-600 bg-gray-100 border-gray-300 rounded size-4 focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              id={`answer${i}`}
              name={`answer${i}`}
              type="checkbox"
              onClick={changeHasAnswerState}
              disabled={hasAnswer}
            />
          </div>
        </div>
      </div>
    </>
  );
};