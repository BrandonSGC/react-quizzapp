export const OptionCard = ({ option, onSelectAnswer, isSelected, i }) => {
  const { description } = option;

  return (
    <div
      onClick={() => onSelectAnswer(option)}
      className={`flex items-center gap-2 p-3 shadow cursor-pointer md:gap-4 text-slate-600 dark:text-purple-100 rounded-xl dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-slate-200 ${
        isSelected && "bg-slate-300 dark:bg-slate-400"
      }`}
    >
      <div className="w-[20%] max-w-[35px] max-h-[35px] grid text-xl font-black bg-purple-600 text-white rounded place-items-center">
        <p>{String.fromCharCode(65 + i)}</p>
      </div>

      <p className="text-lg font-semibold">{description}</p>
    </div>
  );
};
