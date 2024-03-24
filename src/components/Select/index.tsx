import { ChevronDownIcon } from "@heroicons/react/24/solid";
import options from "./options.json";
import { useContext, useState } from "react";
import { FiltersContext } from "src/context/FiltersContext";

const Select = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { sortBy, setSortBy } = useContext(FiltersContext);

  const toggleOpen = () => setIsOpen(!isOpen);

  const updateOption = (name: string) => {
    setSortBy(name);
    setIsOpen(false);
  };

  return (
    <section className="section">
      <h3>Sort by:</h3>
      <button
        className={`flex items-center justify-between p-3 box-border border-2 border-blue-world-rank 
        rounded-lg h-10 hover:cursor-pointer dark:border-light-gray 
        ${isOpen && "border-blue-900"}
        `}
        onClick={toggleOpen}
      >
        <p className={`${isOpen && "text-blue-900 dark:text-offwhite"}`}>
          {sortBy}
        </p>
        <div>
          <ChevronDownIcon
            className={`${
              isOpen ? "rotate-180 text-blue-900" : "rotate-0"
            } w-4 text-blue-world-rank dark:text-light-gray`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="flex flex-col outline outline-2 outline-blue-300 rounded-lg dark:outline-medium-gray">
          {options.map((option) => (
            <button
              key={option.id}
              className="first:rounded-t-lg last:rounded-b-lg text-left p-3 text-blue-300 focus:outline-0 focus:bg-blue-world-rank focus:text-white hover:bg-blue-world-rank hover:text-white hover:cursor-pointer dark:text-light-gray dark:hover:bg-medium-gray dark:hover:text-offwhite dark:focus:bg-medium-gray dark:focus:text-offwhite"
              onClick={() => updateOption(option.name)}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Select;
