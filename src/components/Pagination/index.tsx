import { ICountry } from "src/types/ICountry";
import Country from "../CountriesContainer/Country";
import { useEffect, useMemo, useState } from "react";

const Pagination = ({
  filteredCountries,
}: {
  filteredCountries: ICountry[];
}) => {
  const [countriesToShow, setCountriesToShow] = useState<ICountry[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [prevBtn, setPrevBtn] = useState<boolean>(false);
  const [nextBtn, setNextBtn] = useState<boolean>(true);

  const countriesPerPage = useMemo(() => {
    if (filteredCountries.length <= 50) {
      return filteredCountries.length;
    }
    if (filteredCountries.length > 50 && filteredCountries.length <= 100) {
      return filteredCountries.length / 2;
    }
    if (filteredCountries.length > 100 && filteredCountries.length <= 150) {
      return filteredCountries.length / 3;
    }
    if (filteredCountries.length > 150 && filteredCountries.length <= 200) {
      return filteredCountries.length / 4;
    }
    if (filteredCountries.length > 200 && filteredCountries.length <= 250) {
      return filteredCountries.length / 5;
    }
    return filteredCountries.length / 6;
  }, [filteredCountries]);

  useEffect(() => {
    setCountriesToShow(filteredCountries.slice(0, Math.ceil(countriesPerPage)));
    setIndex(Math.ceil(countriesPerPage));
  }, [filteredCountries, countriesPerPage]);

  useEffect(() => {
    if (currentPage > 1) {
      setPrevBtn(true);
    }
    if (currentPage === 1) {
      setPrevBtn(false);
    }
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const totalPages = filteredCountries.length / countriesPerPage;
    if (currentPage === totalPages) {
      setNextBtn(false);
    } else {
      setNextBtn(true);
    }
  }, [countriesPerPage, filteredCountries, currentPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCountriesToShow(
        filteredCountries.slice(
          Math.ceil(countriesPerPage) * (currentPage - 2),
          Math.ceil(countriesPerPage) * (currentPage - 1)
        )
      );
      setIndex(() => Math.ceil(countriesPerPage) * (currentPage - 1));
      setCurrentPage((previous) => previous - 1);
    }
  };

  const nextPage = () => {
    if (index < filteredCountries.length) {
      setCountriesToShow(
        filteredCountries.slice(
          index,
          Math.ceil(countriesPerPage) * (currentPage + 1)
        )
      );
      setIndex(() => Math.ceil(countriesPerPage) * (currentPage + 1));
      setCurrentPage((previous) => previous + 1);
    }
  };

  return (
    <>
      {countriesToShow?.map((country, index) => (
        <Country
          key={index}
          name={country.name}
          independent={country.independent}
          unMember={country.unMember}
          currencies={country.currencies}
          capital={country.capital}
          region={country.region}
          subregion={country.subregion}
          languages={country.languages}
          area={country.area}
          population={country.population}
          flags={country.flags}
          borders={country.borders}
          cca3={country.cca3}
        />
      ))}
      <div className="flex justify-center	gap-x-2">
        {prevBtn && (
          <button
            className="bg-blue-200 text-blue-900 p-3 rounded-xl border-solid border-2 border-transparent
            hover:border-blue-world-rank
             dark:bg-darkest-gray dark:text-offwhite dark:hover:border-offwhite"
            onClick={prevPage}
          >
            Página Anterior
          </button>
        )}
        {nextBtn && (
          <button
            className="bg-blue-200 text-blue-900 p-3 rounded-xl border-solid border-2 border-transparent
            hover:border-blue-world-rank
             dark:bg-darkest-gray dark:text-offwhite dark:hover:border-offwhite"
            onClick={nextPage}
          >
            Próxima Página
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
