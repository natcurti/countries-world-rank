import { useState } from "react";
import { CheckIcon } from "@heroicons/react/16/solid";

interface IButtonCheckbox {
  status: string;
}

const ButtonCheckbox = ({ status }: IButtonCheckbox) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [statusSearch, setStatusSearch] = useState<string[]>([]);

  const defineStatus = (status: string) => {
    const index = statusSearch.indexOf(status);
    index === -1
      ? setStatusSearch((previous) => [...previous, status])
      : setIsActive(true);
    index !== -1
      ? setStatusSearch((previous) =>
          previous.filter((item) => item !== status)
        )
      : setIsActive(false);
  };

  return (
    <button
      className="flex gap-2 items-center dark:text-offwhite"
      onClick={() => defineStatus(status)}
    >
      <div
        className={`w-6 h-6 border-2 border-blue-700 
        rounded-md dark:border-light-gray ${
          isActive && "bg-blue-700 border-0 dark:border-0"
        }`}
      >
        {isActive && <CheckIcon className="text-white" />}
      </div>
      {status}
    </button>
  );
};

export default ButtonCheckbox;
