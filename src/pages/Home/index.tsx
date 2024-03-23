import { useContext, useEffect, useState } from "react";
import CountriesContainer from "src/components/CountriesContainer";
import Input from "src/components/Input";
import Select from "src/components/Select";
import Status from "src/components/Status";
import Tags from "src/components/Tags";
import { CountriesContext } from "src/context/CountriesContext";
import { ICountry } from "src/types/ICountry";

const Home = () => {
  const { countries } = useContext(CountriesContext);
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filterTags, setFilterTags] = useState<string[]>([]);

  console.log(filterTags);

  useEffect(() => {
    setFilteredCountries(
      countries.filter(
        (country) =>
          country.name.common.toLowerCase() === search.toLowerCase() ||
          country.region.toLowerCase() === search.toLowerCase() ||
          country.subregion?.toLowerCase() === search.toLowerCase()
      )
    );
  }, [countries, search]);

  useEffect(() => {
    const countriesFilteredByTags = filterTags.map((region) =>
      countries.filter((country) => country.region === region)
    );
    setFilteredCountries(countriesFilteredByTags.flat());
  }, [countries, filterTags]);

  return (
    <main>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2>
          Found {countries.length === 0 ? "..." : countries.length} countries
        </h2>
        <Input search={search} setSearch={setSearch} />
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-8 lg:w-1/4">
          <Select />
          <Tags filterTags={filterTags} setFilterTags={setFilterTags} />
          <Status />
        </div>
        <CountriesContainer filteredCountries={filteredCountries} />
      </div>
    </main>
  );
};

export default Home;
