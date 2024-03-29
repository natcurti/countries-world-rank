import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "src/context/CountriesContext";
import { ICountry } from "src/types/ICountry";

interface INeighbouringCountries {
  allNeighbors: string[];
}

const NeighbouringCountries = ({ allNeighbors }: INeighbouringCountries) => {
  const { countries } = useContext(CountriesContext);
  const [neighbors, setNeighbors] = useState<ICountry[]>([]);

  useEffect(() => {
    const neighbors = allNeighbors.map((abbr) =>
      countries.filter((country) => country.cca3 === abbr)
    );
    setNeighbors(neighbors.flat());
  }, [countries, allNeighbors]);

  return (
    <div>
      <p>Neighbouring Countries</p>
      {neighbors.length > 0 &&
        neighbors.map((country) => (
          <div key={country.name.common}>
            <div className="w-10">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="w-10"
              />
            </div>
            <p>{country.name.common}</p>
          </div>
        ))}
    </div>
  );
};

export default NeighbouringCountries;
