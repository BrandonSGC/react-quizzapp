import { ThemeButton } from "./";

export const QuizHeader = ({ image_url, name }) => {
  return (
    <header className="pt-5">
      <div className="flex justify-end mycontainer">
        <ThemeButton />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:items-center mycontainer">
        <img className="size-20 md:size-16" src={image_url} alt="Icon" />
        <h1 className="text-4xl font-bold text-slate-700 dark:text-slate-300">
          {name}
        </h1>
      </div>
    </header>
  );
};
