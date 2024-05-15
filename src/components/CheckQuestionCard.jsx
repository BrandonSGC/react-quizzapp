export const CheckQuestionCard = ({
  description,
  is_correct,
  correct_answer,
  selected_answer,
}) => {
  return (
    <div
      className={`p-4 text-white rounded-xl shadow ${
        is_correct ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex flex-col-reverse justify-between text-xl font-bold md:flex-row">
        <p className="mb-2 font-bold">{description}</p>
        <div
          className={`p-1 px-3 rounded-2xl text-slate-700 text-base font-light flex justify-center gap-1 items-center ${
            is_correct ? "bg-green-300" : "bg-red-300"
          }`}
        >
          <img
            className="size-5"
            src={is_correct ? "/icons/correct.svg" : "/icons/incorrect.svg"}
            alt="icon"
          />
          <p className="font-normal">{is_correct ? "Correct" : "Incorrect"}</p>
        </div>
      </div>

      <p className="text-lg font-medium">
        Correct answer:{" "}
        <span className="text-base text-slate-100">{correct_answer}</span>
      </p>
      <p className="text-lg font-medium">
        Selected answer:{" "}
        <span className="text-base text-slate-100">{selected_answer}</span>
      </p>
    </div>
  );
};