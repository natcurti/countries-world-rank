import { useContext } from "react";
import { CountriesContext } from "src/context/CountriesContext";
import Country from "./Country";

const CountriesContainer = () => {
  const { countries } = useContext(CountriesContext);

  return (
    <section>
      <div className="grid grid-cols-4 gap-2 mb-5 titleCountriesContainer">
        <p>Flag</p>
        <p>Name</p>
        <p>Population</p>
        <p>Area(km²)</p>
      </div>
      <div className="w-full h-[2px] bg-blue-world-rank mb-4 dark:bg-light-gray"></div>
      <div className="flex flex-col gap-4">
        {countries.map((country, index) => (
          <Country
            key={index}
            name={country.name}
            independent={country.independent}
            status={country.status}
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
    </section>
  );
};

export default CountriesContainer;
