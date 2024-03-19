import { useState } from "react";

interface ITag {
  region: string;
}

const Tag = ({ region }: ITag) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [filterTags, setFilterTags] = useState<string[]>([""]);

  const defineTag = (region: string) => {
    const index = filterTags.indexOf(region);
    index === -1
      ? setFilterTags((previous) => [...previous, region])
      : setIsActive(true);
    index !== -1
      ? setFilterTags((previous) => previous.filter((item) => item !== region))
      : setIsActive(false);
  };

  return (
    <button
      onClick={() => defineTag(region)}
      className={`p-2 rounded-2xl
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
