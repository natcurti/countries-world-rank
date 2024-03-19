import regions from "./regions.json";

const Tags = () => {
  return (
    <section className="section">
      <h3>Region</h3>
      <div className="flex flex-wrap gap-2">
        {regions.map((region, index) => (
          <button
            key={index}
            className="p-2 rounded-2xl hover:bg-blue-world-rank hover:text-white
            dark:hover:bg-medium-gray dark:hover:text-offwhite
            "
          >
            {region}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Tags;
