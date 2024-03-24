import { createContext, useState } from "react";

interface IFiltersContext {
  filterTags: string[];
  setFilterTags: React.Dispatch<React.SetStateAction<string[]>>;
  filterStatus: string[];
  setFilterStatus: React.Dispatch<React.SetStateAction<string[]>>;
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

  return (
    <FiltersContext.Provider
      value={{
        filterTags,
        setFilterTags,
        filterStatus,
        setFilterStatus,
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
