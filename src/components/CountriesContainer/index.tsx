import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Country from "./Country";
import { ICountry } from "src/types/ICountry";
import usePagination from "src/hooks/usePagination";
import ButtonNextAndPrev from "../Buttons/ButtonNextAndPrev";

const CountriesContainer = () => {
  const pages = usePagination();
  const [countriesToShow, setCountriesToShow] = useState<ICountry[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [disabledNext, setDisabledNext] = useState<boolean>(false);
  const [disabledPrev, setDisabledPrev] = useState<boolean>(false);

  useEffect(() => {
    setCountriesToShow(pages[0]);
    setDisabledPrev(true);
  }, [pages]);

  const nextPage = () => {
    setDisabledPrev(false);
    if (index < pages.length - 1) {
      setCountriesToShow(pages[index + 1]);
      setIndex((previous) => previous + 1);
    }
    if (index === 7) {
      setDisabledNext(true);
    }
  };

  const prevPage = () => {
    setDisabledNext(false);
    if (index > 0) {
      setCountriesToShow(pages[index - 1]);
      setIndex((previous) => previous - 1);
    }
    if (index === 1) {
      setDisabledPrev(true);
    }
  };

  return (
    <section className="lg:w-3/4">
      <div className="grid grid-cols-4 gap-2 mb-5 title-countries-container">
        <p>Flag</p>
        <p>Name</p>
        <p>Population</p>
        <p>Area(km²)</p>
      </div>
      <div className="w-full h-[2px] bg-blue-world-rank mb-4 dark:bg-light-gray"></div>
      <div className="flex flex-col gap-4">
        {countriesToShow &&
          countriesToShow.map((country, index) => (
            <Country
              key={index}
              name={country.name}
              independent={country.independent}
              status={country.status}
              currencies={country.currencies}
              capital={country.capital}
              region={country.region}
              subregion={country.subregion}
              languages={country.languages}
              area={country.area}
              population={country.population}
              flags={country.flags}
            />
          ))}
      </div>
      <div className="flex gap-4 justify-center mt-5">
        <ButtonNextAndPrev
          onClick={disabledPrev ? () => {} : prevPage}
          disabled={disabledPrev}
        >
          <ChevronDoubleLeftIcon className="w-4 sm:w-5" />
          Previous
        </ButtonNextAndPrev>
        <ButtonNextAndPrev
          onClick={disabledNext ? () => {} : nextPage}
          disabled={disabledNext}
        >
          Next
          <ChevronDoubleRightIcon className="w-4 sm:w-5" />
        </ButtonNextAndPrev>
      </div>
    </section>
  );
};

export default CountriesContainer;
