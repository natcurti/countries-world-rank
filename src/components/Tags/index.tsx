import Tag from "./Tag";
import regions from "./regions.json";

const Tags = () => {
  return (
    <section className="section">
      <h3>Region</h3>
      <div className="flex flex-wrap gap-2">
        {regions.map((region, index) => (
          <Tag region={region} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Tags;
