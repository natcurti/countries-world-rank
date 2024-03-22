import { IButtons } from "src/types/IButtons";

const ButtonNextAndPrev = ({ children, onClick, disabled }: IButtons) => {
  const isNextButton = children?.toLocaleString().includes("Next");

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn-next-and-prev  ${disabled && "opacity-40"} ${
        !disabled && "hover:opacity-70"
      } ${isNextButton ? "bg-gradient-to-r" : "bg-gradient-to-l"}`}
    >
      {children}
    </button>
  );
};

export default ButtonNextAndPrev;
