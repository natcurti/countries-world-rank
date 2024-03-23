import { SetStateAction } from "react";
import Tag from "./Tag";
import regions from "./regions.json";

export interface ITags {
  filterTags: string[];
  setFilterTags: React.Dispatch<SetStateAction<string[]>>;
}

const Tags = ({ filterTags, setFilterTags }: ITags) => {
  return (
    <section className="section">
      <h3>Region</h3>
      <div className="flex flex-wrap gap-2">
        {regions.map((region, index) => (
          <Tag
            region={region}
            key={index}
            filterTags={filterTags}
            setFilterTags={setFilterTags}
          />
        ))}
      </div>
    </section>
  );
};

export default Tags;
