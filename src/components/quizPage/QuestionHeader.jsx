import { API } from '../../constants';

export const QuestionHeader = ({image_url, name}) => {
  return (
    <div className="flex items-center gap-2">
      <img className="size-12" src={`${API}${image_url}`} alt="Icon" />
      <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-300">
        {name}
      </h1>
    </div>
  );
};
