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
    <div className="px-3">
      <p className="mb-3 text-blue-world-rank dark:text-light-gray">
        Neighbouring Countries
      </p>
      <div className="flex flex-wrap gap-4">
        {neighbors.length > 0 &&
          neighbors.map((country) => (
            <div key={country.name.common} className="flex flex-col gap-1">
              <div className="w-20 h-14 rounded">
                <img
                  src={country.flags.svg}
                  alt={country.flags.alt}
                  className="w-20 h-14 object-cover rounded"
                />
              </div>
              <p className="text-xs text-blue-900 dark:text-offwhite">
                {country.name.common}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NeighbouringCountries;
