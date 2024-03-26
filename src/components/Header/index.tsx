import logo from "src/assets/images/Logo.svg";
import ToggleTheme from "../ToggleTheme";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/");
  };

  return (
    <header className="relative bg-banner bg-cover bg-center h-72 flex items-center justify-center">
      <h1 onClick={navigateTo} className="cursor-pointer">
        <img src={logo} alt="Logo World Ranks" />
      </h1>
      <ToggleTheme />
    </header>
  );
};

export default Header;
