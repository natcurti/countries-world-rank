import { IButtons } from "src/types/IButtons";

const ButtonNextAndPrev = ({ children, onClick, disabled }: IButtons) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn-next-and-prev bg-gradient-to-r from-blue-900 to-blue-500 ${
        disabled && "opacity-50"
      } ${!disabled && "hover:opacity-80"}`}
    >
      {children}
    </button>
  );
};

export default ButtonNextAndPrev;
