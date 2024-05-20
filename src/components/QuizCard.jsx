import { Link } from "react-router-dom";
import { API } from '../index';

export const QuizCard = ({ id, image_url, name }) => {
  return (
    <Link
      to={`quizzes/${id}`}
      className="flex items-center gap-2 p-3 duration-300 bg-white shadow-md cursor-pointer text-slate-600 dark:text-purple-100 rounded-xl dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-purple-200"
    >
      <img className="size-10" src={`${API}${image_url}`} alt="Quiz Icon" />
      <p className="text-xl font-semibold">{name}</p>
    </Link>
  );
};