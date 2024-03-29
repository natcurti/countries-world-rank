import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountriesContext } from "src/context/CountriesContext";
import { ICountry } from "src/types/ICountry";

interface INeighbouringCountries {
  allNeighbors: string[];
}

const NeighbouringCountries = ({ allNeighbors }: INeighbouringCountries) => {
  const { countries } = useContext(CountriesContext);
  const [neighbors, setNeighbors] = useState<ICountry[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const neighbors = allNeighbors.map((abbr) =>
      countries.filter((country) => country.cca3 === abbr)
    );
    setNeighbors(neighbors.flat());
  }, [countries, allNeighbors]);

  const navigateToDetailsPage = (name: string) => {
    const detailspage = name.toLowerCase().replace(" ", "");
    navigate(`/${detailspage}`);
  };

  return (
    <div className="px-3">
      <p className="mb-3 text-blue-world-rank dark:text-light-gray">
        Neighbouring Countries
      </p>
      <div className="flex flex-wrap gap-4">
        {neighbors.length > 0 &&
          neighbors.map((country) => (
            <button
              key={country.name.common}
              className="flex flex-col gap-1"
              onClick={() => navigateToDetailsPage(country.name.common)}
            >
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
            </button>
          ))}
      </div>
    </div>
  );
};

export default NeighbouringCountries;
