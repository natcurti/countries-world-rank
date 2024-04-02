import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-48 text-center flex flex-col justify-around items-center">
      <p className="text-blue-900 dark:text-offwhite">
        País não encontrado. Tente novamente ou retorne para a página anterior.
      </p>
      <button
        onClick={goBack}
        className="w-24 h-10 bg-blue-900 rounded-3xl text-white dark:text-offwhite dark:bg-light-gray"
      >
        Voltar
      </button>
    </div>
  );
};

export default NotFound;
