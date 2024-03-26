import { useContext, useState } from "react";
import { FiltersContext } from "src/context/FiltersContext";

interface ITag {
  region: string;
}

const Tag = ({ region }: ITag) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { filterTags, setFilterTags } = useContext(FiltersContext);

  const defineTag = (region: string) => {
    setIsActive(!isActive);
    const index = filterTags.indexOf(region);
    index === -1 && setFilterTags((previous) => [...previous, region]);
    index !== -1 &&
      setFilterTags((previous) => previous.filter((item) => item !== region));
  };

  return (
    <button
      onClick={() => defineTag(region)}
      className={`p-2 rounded-2xl hover:underline hover:underline-offset-4 hover:decoration-2  focus:outline-blue-900 dark:focus:outline-white
            ${isActive && "bg-config"}
            `}
    >
      {region}
    </button>
  );
};

export default Tag;
