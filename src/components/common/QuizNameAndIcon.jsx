import { API } from "../../constants";

export const QuizNameAndIcon = ({
  image_url = "",
  name = "",
  iconClassName = "",
  textClassName = "",
}) => {
  return (
    <div className="flex items-center gap-2">
      <img className={iconClassName} src={`${API}${image_url}`} alt="Icon" />
      <h1 className={`${textClassName} text-slate-700 dark:text-slate-300`}>
        {name}
      </h1>
    </div>
  );
};