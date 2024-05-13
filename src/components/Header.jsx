import { BackArrowIcon } from "../assets";
import { ThemeButton } from ".";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="py-5">
      <div className="flex items-center justify-between mycontainer">
        {(pathname !== "/") && (
          <Link className="size-10" to="/">
            <BackArrowIcon />
          </Link>
        )}
        <div className="w-[100%] size-10 flex justify-end">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};