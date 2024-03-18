import arrowDown from "src/assets/images/Expand_down.svg";
import options from "./options.json";
import { useState } from "react";

const Select = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>("Population");

  const toggleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const updateOption = (name: string) => {
    setCurrentOption(name);
    setIsOpen(false);
  };

  return (
    <div className="text-light-gray flex flex-col gap-1">
      <p className="text-xs">Sort by:</p>
      <div
        className="flex items-center justify-between p-3 box-border border-2 border-medium-gray rounded-lg h-10 hover:cursor-pointer"
        onClick={toggleOpen}
      >
        <p>{currentOption}</p>
        <div>
          <img
            src={arrowDown}
            alt="Icon arrow down"
            className={`${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 border-2 border-medium-gray rounded-lg">
          {options.map((option) => (
            <p
              key={option.id}
              className="p-3 hover:bg-medium-gray hover:text-offwhite hover:cursor-pointer"
              onClick={() => updateOption(option.name)}
            >
              {option.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
