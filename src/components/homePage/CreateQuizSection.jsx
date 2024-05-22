import { useUserContext } from "../../hooks";
import { CreateQuizButton } from "./CreateQuizButton";

export const CreateQuizSection = () => {
  const { name, isAuthenticated } = useUserContext();

  return (
    <section className="mt-6 md:mt-16">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-5xl font-black text-center text-pink-500">
          Create your own quiz now{isAuthenticated && ` ${name}`}!
        </h3>
        <div className="grid place-items-center">
          <CreateQuizButton />
        </div>
      </div>
    </section>
  );
};
