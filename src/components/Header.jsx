import { BackArrowIcon } from "../assets";
import { ThemeButton } from ".";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <header className="py-5">
      <div className="flex items-center justify-between mycontainer">
        {(pathname !== "/") && (
          <div onClick={handleClick} className="cursor-pointer size-10">
            <BackArrowIcon />
          </div>
        )}
        <div className="w-[100%] size-10 flex justify-end">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};