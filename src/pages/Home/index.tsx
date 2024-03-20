import { useEffect, useState } from "react";
import Header from "src/components/Header";
import Input from "src/components/Input";
import Select from "src/components/Select";
import Status from "src/components/Status";
import Tags from "src/components/Tags";
import http from "src/http";

const Home = () => {
  const [allCountries, setAllCountries] = useState<number>();

  useEffect(() => {
    http
      .get("all")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setAllCountries(data.length);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col gap-5 p-5 w-full h-screen shadow-lg bg-blue-50 lg:w-4/5 lg:absolute lg:top-40 lg:rounded-2xl lg:left-2/4 lg:-translate-x-1/2 dark:bg-dark-gray">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {allCountries && (
            <h2 className="font-bold text-base md:text-lg lg:text-xl text-blue-900 dark:text-light-gray">
              Found {allCountries} countries
            </h2>
          )}
          <Input />
        </div>
        <Select />
        <Tags />
        <Status />
      </main>
    </>
  );
};

export default Home;
