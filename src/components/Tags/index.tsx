import regions from "./regions.json";

const Tags = () => {
  return (
    <section>
      <h2>Region</h2>
      <div>
        {regions.map((region, index) => (
          <p key={index}>{region}</p>
        ))}
      </div>
    </section>
  );
};

export default Tags;
