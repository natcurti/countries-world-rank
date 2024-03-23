import { useState } from "react";
import { ITags } from "..";

interface ITag extends ITags {
  region: string;
}

const Tag = ({ region, filterTags, setFilterTags }: ITag) => {
  const [isActive, setIsActive] = useState<boolean>(false);

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
            ${
              isActive &&
              "bg-blue-world-rank text-white dark:bg-medium-gray dark:text-offwhite"
            }
            `}
    >
      {region}
    </button>
  );
};

export default Tag;
