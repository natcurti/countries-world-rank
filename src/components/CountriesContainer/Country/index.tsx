import { ICountry } from "src/types/ICountry";

const Country = ({ ...props }: ICountry) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center text-blue-900 text-xs dark:text-offwhite xs:text-base md:text-lg">
      <div className="w-12 h-9 rounded-md sm:w-16 sm:h-12">
        <img
          src={props.flags.svg}
          alt={props.flags.alt}
          className="w-12 h-9 object-cover rounded-md sm:w-16 sm:h-12"
        />
      </div>
      <p>{props.name.common}</p>
      <p>{props.population}</p>
      <p>{props.area}</p>
    </div>
  );
};

export default Country;
