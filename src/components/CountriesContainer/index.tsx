// import {
//   ChevronDoubleLeftIcon,
//   ChevronDoubleRightIcon,
// } from "@heroicons/react/24/outline";
// import { useContext, useEffect, useState } from "react";
import { useContext } from "react";
import Country from "./Country";
import { CountriesContext } from "src/context/CountriesContext";
import { FiltersContext } from "src/context/FiltersContext";
import { ICountry } from "src/types/ICountry";
// import { ICountry } from "src/types/ICountry";
// import usePagination from "src/hooks/usePagination";
// import ButtonNextAndPrev from "../Buttons/ButtonNextAndPrev";
// import { FiltersContext } from "src/context/FiltersContext";

const CountriesContainer = () => {
  const { countries } = useContext(CountriesContext);
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

  console.log(filteredCountries);

  return (
    <section className="lg:w-3/4">
      <div className="grid grid-cols-4 gap-2 mb-5 title-countries-container">
        <p>Flag</p>
        <p>Name</p>
        <p>Population</p>
        <p>Area(km²)</p>
      </div>
      <div className="w-full h-[2px] bg-blue-world-rank mb-4 dark:bg-light-gray"></div>
      <div className="flex flex-col gap-4">
        {filteredCountries.map((country, index) => (
          <Country
            key={index}
            name={country.name}
            independent={country.independent}
            unMember={country.unMember}
            currencies={country.currencies}
            capital={country.capital}
            region={country.region}
            subregion={country.subregion}
            languages={country.languages}
            area={country.area}
            population={country.population}
            flags={country.flags}
          />
        ))}
      </div>
      {/* <div className="flex gap-4 justify-center mt-5">
        <ButtonNextAndPrev
          onClick={disabledPrev ? () => {} : prevPage}
          disabled={disabledPrev}
        >
          <ChevronDoubleLeftIcon className="w-4 sm:w-5" />
          Previous
        </ButtonNextAndPrev>
        <ButtonNextAndPrev
          onClick={disabledNext ? () => {} : nextPage}
          disabled={disabledNext}
        >
          Next
          <ChevronDoubleRightIcon className="w-4 sm:w-5" />
        </ButtonNextAndPrev>
      </div> */}
    </section>
  );
};

export default CountriesContainer;
