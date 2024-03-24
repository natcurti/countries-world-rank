import { createContext, useState } from "react";
import { ICountry } from "src/types/ICountry";

interface IFiltersContext {
  filterTags: string[];
  setFilterTags: React.Dispatch<React.SetStateAction<string[]>>;
  filterStatus: string[];
  setFilterStatus: React.Dispatch<React.SetStateAction<string[]>>;
  filteredCountries: ICountry[];
  setFilteredCountries: React.Dispatch<React.SetStateAction<ICountry[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export const FiltersContext = createContext<IFiltersContext>({
  filterTags: [],
  setFilterTags: () => {},
  filterStatus: [],
  setFilterStatus: () => {},
  filteredCountries: [],
  setFilteredCountries: () => {},
  search: "",
  setSearch: () => {},
  sortBy: "",
  setSortBy: () => {},
});

interface IFiltersContextProvider {
  children: React.ReactNode;
}

export const FiltersContextProvider = ({
  children,
}: IFiltersContextProvider) => {
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Population");
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);

  return (
    <FiltersContext.Provider
      value={{
        filterTags,
        setFilterTags,
        filterStatus,
        setFilterStatus,
        filteredCountries,
        setFilteredCountries,
        search,
        setSearch,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
