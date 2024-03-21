import { useContext } from "react";
import { CountriesContext } from "src/context/CountriesContext";
import Country from "./Country";

const CountriesContainer = () => {
  const { countries } = useContext(CountriesContext);

  return (
    <section className="bg-pink-500">
      <div className="grid grid-cols-4 titleCountriesContainer">
        <p>Flag</p>
        <p>Name</p>
        <p>Population</p>
        <p>Area(km²)</p>
      </div>
      <div className="flex flex-col">
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
