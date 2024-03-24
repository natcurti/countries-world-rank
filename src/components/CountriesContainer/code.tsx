// const pages = usePagination();
//   const [countriesToShow, setCountriesToShow] = useState<ICountry[]>([]);
//   const [index, setIndex] = useState<number>(0);
//   const [disabledNext, setDisabledNext] = useState<boolean>(false);
//   const [disabledPrev, setDisabledPrev] = useState<boolean>(false);
//   const { filteredCountries } = useContext(FiltersContext);

//   useEffect(() => {
//     if (filteredCountries.length > 0) {
//       setCountriesToShow(filteredCountries);
//       setDisabledNext(true);
//     } else {
//       setCountriesToShow(pages[0]);
//       setDisabledNext(false);
//     }
//     setDisabledPrev(true);
//   }, [pages, filteredCountries]);

//   const nextPage = () => {
//     setDisabledPrev(false);
//     if (index < pages.length - 1) {
//       setCountriesToShow(pages[index + 1]);
//       setIndex((previous) => previous + 1);
//     }
//     if (index === 7) {
//       setDisabledNext(true);
//     }
//   };

//   const prevPage = () => {
//     setDisabledNext(false);
//     if (index > 0) {
//       setCountriesToShow(pages[index - 1]);
//       setIndex((previous) => previous - 1);
//     }
//     if (index === 1) {
//       setDisabledPrev(true);
//     }
//   };

// useEffect(() => {
//     const countriesFilteredByTags = filterTags.map((region) =>
//     countries.filter((country) => country.region === region)
//   );
//   setFilteredCountries(countriesFilteredByTags.flat());
// }, [countries, filterTags, setFilteredCountries]);
