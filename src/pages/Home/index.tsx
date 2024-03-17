import Header from "src/components/Header";
import Input from "src/components/Input";

const Home = () => {
  return (
    <>
      <Header />
      <main className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-light-gray font-bold">Found 234 countries</p>
          <Input />
        </div>
      </main>
    </>
  );
};

export default Home;
