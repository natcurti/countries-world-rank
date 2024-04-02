import { useNavigate } from "react-router-dom";
import { ICountry } from "src/types/ICountry";

const Country = ({ ...props }: ICountry) => {
  const navigate = useNavigate();
  const detailsPage = props.name.common.toLowerCase().replace(" ", "");

  const navigateToDetailsPage = () => {
    navigate(`/${detailsPage}`);
  };

  return (
    <div
      onClick={navigateToDetailsPage}
      className="rounded-md grid grid-cols-4 gap-4 items-center text-blue-900 text-[0.65rem] xs:text-base md:text-lg xl:grid-cols-5 hover:bg-blue-300 dark:hover:bg-medium-gray hover:cursor-pointer dark:text-offwhite"
    >
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
      <p className="hidden xl:inline-block">{props.region}</p>
    </div>
  );
};

export default Country;
