import { useContext } from "react";
import { CountriesContext } from "src/context/CountriesContext";
import { FiltersContext } from "src/context/FiltersContext";
import { ICountry } from "src/types/ICountry";
import Pagination from "../Pagination";
import Spinner from "../Spinner";

const CountriesContainer = () => {
  const { countries, isLoading, error } = useContext(CountriesContext);
  const { sortBy, filterTags, search, filterStatus } =
    useContext(FiltersContext);
  let filteredCountries: ICountry[] = [];

  const filteredContriesByTag = filterTags
    .map((tag) => countries.filter((country) => country.region === tag))
    .flat();

  const sortedCountries =
    sortBy === "Population"
      ? countries.sort((a, b) => b.population - a.population)
      : countries.sort((a, b) => b.area - a.area);

  if (filteredContriesByTag.length > 0) {
    filteredCountries =
      sortBy === "Population"
        ? filteredContriesByTag.sort((a, b) => b.population - a.population)
        : filteredContriesByTag.sort((a, b) => b.area - a.area);
  } else {
    filteredCountries = sortedCountries;
  }

  if (search.length > 0) {
    const searchedCountry = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()) ||
        country.region.toLowerCase().includes(search.toLowerCase()) ||
        country.subregion?.toLowerCase().includes(search.toLowerCase())
    );
    filteredCountries = searchedCountry;
  }

  if (filterStatus.length > 0) {
    if (
      filterStatus.includes("Independent") &&
      filterStatus.includes("Member of the United Nations")
    ) {
      filteredCountries = countries.filter(
        (country) => country.independent && country.unMember
      );
      if (filterTags.length > 0) {
        filteredCountries = filteredContriesByTag.filter(
          (country) => country.independent && country.unMember
        );
      }
    }
    if (
      !filterStatus.includes("Independent") &&
      filterStatus.includes("Member of the United Nations")
    ) {
      filteredCountries = countries.filter((country) => country.unMember);
      if (filterTags.length > 0) {
        filteredCountries = filteredContriesByTag.filter(
          (country) => country.unMember
        );
      }
    }
    if (
      filterStatus.includes("Independent") &&
      !filterStatus.includes("Member of the United Nations")
    ) {
      filteredCountries = countries.filter((country) => country.independent);
      if (filterTags.length > 0) {
        filteredCountries = filteredContriesByTag.filter(
          (country) => country.independent
        );
      }
    }
  }

  return (
    <section className="lg:w-3/4">
      <div className="grid grid-cols-4 gap-2 mb-5 xl:grid-cols-5 title-countries-container">
        <p>Flag</p>
        <p>Name</p>
        <p>Population</p>
        <p>Area(km²)</p>
        <p className="hidden xl:inline-block">Region</p>
      </div>
      <div className="w-full h-[2px] bg-blue-world-rank mb-4 dark:bg-light-gray"></div>
      {isLoading && (
        <div className="w-full mt-10 grid place-items-center">
          {isLoading && <Spinner />}
        </div>
      )}
      {error && (
        <div className="w-full mt-10 grid place-items-center">
          {error && (
            <p className="text-blue-900 dark:text-offwhite">
              Não foi possível obter a lista de países.
            </p>
          )}
        </div>
      )}
      {!isLoading && !error && (
        <div className="flex flex-col gap-3">
          <Pagination filteredCountries={filteredCountries} />
        </div>
      )}
    </section>
  );
};

export default CountriesContainer;
