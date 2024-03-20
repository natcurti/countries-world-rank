import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useLayoutEffect, useState } from "react";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useLayoutEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="absolute top-4 right-4" onClick={toggle}>
      {darkMode ? (
        <SunIcon className="text-offwhite w-6" />
      ) : (
        <MoonIcon className="text-offwhite w-6" />
      )}
    </button>
  );
};

export default ToggleTheme;
