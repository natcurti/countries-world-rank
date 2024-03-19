import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Input = () => {
  return (
    <div className="flex gap-2 box-border p-2 bg-transparent text-blue-world-rank rounded-lg h-10 border-blue-world-rank border-2 dark:border-0 dark:bg-medium-gray dark:text-light-gray ">
      <MagnifyingGlassIcon className="w-6" />
      <input
        className="w-full bg-transparent outline-none cursor-pointer placeholder:text-xs placeholder:text-blue-400 placeholder:dark:text-light-gray sm:w-60"
        placeholder="Search by Name, Region or Subregion"
      />
    </div>
  );
};

export default Input;
