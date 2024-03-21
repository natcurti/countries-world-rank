import { ICountry } from "src/types/ICountry";

const Country = ({ ...props }: ICountry) => {
  console.log(props);
  return (
    <div className="grid grid-cols-4">
      <div className="w-12 h-9 bg-green-500">
        <img
          src={props.flags.png}
          alt={props.flags.alt}
          className="w-12 h-9 object-cover"
        />
      </div>
      <p>{props.name.common}</p>
      <p>{props.population}</p>
      <p>{props.area}</p>
    </div>
  );
};

export default Country;
