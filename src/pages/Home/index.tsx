import { useContext } from "react";
import CountriesContainer from "src/components/CountriesContainer";
import Header from "src/components/Header";
import Input from "src/components/Input";
import Select from "src/components/Select";
import Status from "src/components/Status";
import Tags from "src/components/Tags";
import { CountriesContext } from "src/context/CountriesContext";

const Home = () => {
  const { countries } = useContext(CountriesContext);
  return (
    <>
      <Header />
      <main className="flex flex-col gap-5 p-5 w-full shadow-lg bg-blue-50 lg:w-4/5 lg:absolute lg:top-40 lg:rounded-2xl lg:left-2/4 lg:-translate-x-1/2 dark:bg-dark-gray">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-base sm:text-xl text-blue-900 font-bold dark:text-light-gray">
            Found {countries.length === 0 ? "..." : countries.length} countries
          </h2>
          <Input />
        </div>
        <Select />
        <Tags />
        <Status />
        <CountriesContainer />
      </main>
    </>
  );
};

export default Home;
