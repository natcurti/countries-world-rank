import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect } from "react";
import { CountriesContext } from "src/context/CountriesContext";
import { FiltersContext } from "src/context/FiltersContext";

const Input = () => {
  const { countries } = useContext(CountriesContext);
  const { search, setSearch, setFilteredCountries } =
    useContext(FiltersContext);

  useEffect(() => {
    setFilteredCountries(
      countries.filter(
        (country) =>
          country.name.common.toLowerCase() === search.toLowerCase() ||
          country.region.toLowerCase() === search.toLowerCase() ||
          country.subregion?.toLowerCase() === search.toLowerCase()
      )
    );
  }, [countries, search, setFilteredCountries]);

  return (
    <div className="flex gap-2 box-border p-2 bg-transparent text-blue-world-rank rounded-lg h-10 border-blue-world-rank border-2 shadow dark:border-0 dark:bg-medium-gray dark:text-light-gray ">
      <MagnifyingGlassIcon className="w-6" />
      <input
        className="w-full bg-transparent outline-none cursor-pointer placeholder:text-xs placeholder:text-blue-400 placeholder:dark:text-light-gray sm:w-60"
        placeholder="Search by Name, Region or Subregion"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Input;
