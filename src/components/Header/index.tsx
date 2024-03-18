import logo from "src/assets/images/Logo.svg";
import ToggleTheme from "../ToggleTheme";

const Header = () => {
  return (
    <header className="relative bg-banner bg-cover bg-center h-48 flex items-center justify-center">
      <h1>
        <img src={logo} alt="Logo World Ranks" />
      </h1>
      <ToggleTheme />
    </header>
  );
};

export default Header;
