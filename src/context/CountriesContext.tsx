import { createContext, useEffect, useState } from "react";
import http from "src/http";
import { ICountry } from "src/types/ICountry";

interface ICountriesContext {
  countries: ICountry[];
  setCountries: React.Dispatch<React.SetStateAction<ICountry[]>>;
  isLoading: boolean;
  error: string;
}

export const CountriesContext = createContext<ICountriesContext>({
  countries: [],
  setCountries: () => {},
  isLoading: true,
  error: "",
});

interface ICountriesContextProvider {
  children: React.ReactNode;
}

export const CountriesContextProvider = ({
  children,
}: ICountriesContextProvider) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    http
      .get("all")
      .then((response) => response.data)
      .then((data) => data as ICountry[])
      .then((data) => setCountries(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        isLoading,
        error,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
