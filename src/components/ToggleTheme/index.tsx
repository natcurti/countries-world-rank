import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useLayoutEffect, useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("");

  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggle = () => {
    if (theme === "dark") setTheme("");
    if (theme === "") setTheme("dark");
  };

  return (
    <button className="absolute top-4 right-4" onClick={toggle}>
      {theme === "dark" ? (
        <SunIcon className="text-offwhite w-6" />
      ) : (
        <MoonIcon className="text-offwhite w-6" />
      )}
    </button>
  );
};

export default ToggleTheme;
