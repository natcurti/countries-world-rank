import { useContext, useMemo } from "react";
import { CountriesContext } from "src/context/CountriesContext";

const usePagination = () => {
  const { countries } = useContext(CountriesContext);

  const pages = useMemo(() => {
    const amountOfPages = [];
    let index = 0;
    while (index < countries.length) {
      const itemsOnPage = countries.slice(index, index + 30);
      index += 30;
      amountOfPages.push(itemsOnPage);
    }
    return amountOfPages;
  }, [countries]);

  return pages;
};

export default usePagination;
