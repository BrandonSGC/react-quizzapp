export const QuizNavigationButton = ({ disabled, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-1 font-medium text-white duration-300 bg-purple-500 rounded shadow shadow-purple-900 dark:shadow-purple-700 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
      }`}
    >
      {label}
    </button>
  );
};
