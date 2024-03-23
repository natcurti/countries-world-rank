import { useContext, useState } from "react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { FiltersContext } from "src/context/FiltersContext";

interface IButtonCheckbox {
  status: string;
}

const ButtonCheckbox = ({ status }: IButtonCheckbox) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { filterStatus, setFilterStatus } = useContext(FiltersContext);

  const defineStatus = (status: string) => {
    setIsActive(!isActive);
    const index = filterStatus.indexOf(status);
    if (index === -1) setFilterStatus((previous) => [...previous, status]);
    if (index !== -1)
      setFilterStatus((previous) => previous.filter((item) => item !== status));
  };

  return (
    <button
      className="h-10 flex gap-4 items-center text-base lg:text-xs xl:text-base focus:outline-blue-900 dark:focus:outline-white dark:text-offwhite"
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
      <p>{status}</p>
    </button>
  );
};

export default ButtonCheckbox;
