import { createContext, useEffect, useState } from "react";
import http from "src/http";
import { ICountry } from "src/types/ICountry";

interface ICountriesContext {
  countries: ICountry[];
  setCountries: React.Dispatch<React.SetStateAction<ICountry[]>>;
}

export const CountriesContext = createContext<ICountriesContext>({
  countries: [],
  setCountries: () => {},
});

interface ICountriesContextProvider {
  children: React.ReactNode;
}

export const CountriesContextProvider = ({
  children,
}: ICountriesContextProvider) => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    http
      .get("all")
      .then((response) => response.data)
      .then((data) => data as ICountry[])
      .then((data) => setCountries(data));
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries: countries,
        setCountries: setCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
