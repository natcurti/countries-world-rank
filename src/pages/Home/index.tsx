import { useContext } from "react";
import CountriesContainer from "src/components/CountriesContainer";
import Input from "src/components/Input";
import Select from "src/components/Select";
import Status from "src/components/Status";
import Tags from "src/components/Tags";
import { CountriesContext } from "src/context/CountriesContext";

const Home = () => {
  const { countries } = useContext(CountriesContext);

  return (
    <main>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2>
          Found {countries.length === 0 ? "..." : countries.length} countries
        </h2>
        <Input />
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-8 lg:w-1/4">
          <Select />
          <Tags />
          <Status />
        </div>
        <CountriesContainer />
      </div>
    </main>
  );
};

export default Home;
