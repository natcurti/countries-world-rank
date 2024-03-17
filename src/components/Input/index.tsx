import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Input = () => {
  return (
    <div className="flex gap-2 box-border p-2 bg-medium-gray text-light-gray rounded-lg h-10">
      <MagnifyingGlassIcon className="w-6" />
      <input
        className="w-full bg-transparent outline-none cursor-pointer placeholder:text-xs placeholder:text-light-gray sm:w-60"
        placeholder="Search by Name, Region or Subregion"
      />
    </div>
  );
};

export default Input;
