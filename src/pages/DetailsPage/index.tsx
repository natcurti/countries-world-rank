import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "src/context/CountriesContext";
import { ICountry } from "src/types/ICountry";
import { ICurrency } from "src/types/ICurrency";

const DetailsPage = () => {
  const { countries } = useContext(CountriesContext);
  const params = useParams();
  const [countryToShow, setCountryToShow] = useState<ICountry>();
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const [languages, setLanguages] = useState<object>();

  useEffect(() => {
    const country = countries.filter(
      (country) =>
        country.name.common.toLowerCase() === params.name?.toLowerCase()
    );
    setCountryToShow(country[0]);
  }, [countries, params.name]);

  useEffect(() => {
    if (countryToShow?.currencies) {
      const currency = Object.values(countryToShow?.currencies);
      setCurrencies(currency);
      const languages = Object.values(countryToShow?.languages);
      setLanguages(languages);
    }
  }, [countryToShow]);

  return (
    <main className="p-0 lg:w-3/5">
      {countryToShow ? (
        <div className="flex flex-col gap-6 mb-10">
          <div className="relative flex flex-col items-center">
            <img
              className="w-[14.625rem] rounded-lg absolute -top-16"
              src={countryToShow.flags.svg}
              alt={countryToShow.flags.alt}
            />
            <div className="flex flex-col items-center gap-1 translate-y-24 mb-24">
              <h2 className="text-2xl">{countryToShow.name.common}</h2>
              <h3 className="text-base">{countryToShow.name.official}</h3>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <div className="bg-config flex flex-col justify-center items-center rounded-lg w-2/5 p-1 sm:flex-row sm:justify-around sm:p-3 sm:rounded-xl">
              <p>Population</p>
              <span className="w-4/5 h-[1px] bg-white sm:w-[1px] sm:h-8"></span>
              <p>{countryToShow.population}</p>
            </div>
            <div className="bg-config flex flex-col justify-center items-center rounded-lg w-2/5 p-1 sm:flex-row sm:justify-around sm:p-3 sm:rounded-xl">
              <p>Area(km²)</p>
              <span className="w-4/5 h-[1px] bg-white sm:w-[1px] sm:h-8"></span>
              <p>{countryToShow.area}</p>
            </div>
          </div>
          <ul>
            <li>
              <p>Capital</p>
              <p>{countryToShow.capital}</p>
            </li>
            <li>
              <p>Subregion</p>
              <p>{countryToShow.subregion}</p>
            </li>
            <li>
              <p>Language</p>
              <p>{languages?.toString()}</p>
            </li>
            <li>
              <p>Currencies</p>
              <p>{currencies[0]?.name}</p>
            </li>
            <li>
              <p>Continents</p>
              <p>{countryToShow.region}</p>
            </li>
          </ul>
        </div>
      ) : (
        <p>Carregando</p>
      )}
    </main>
  );
};

export default DetailsPage;
