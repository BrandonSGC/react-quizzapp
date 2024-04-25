import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../assets/";

export const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
};
