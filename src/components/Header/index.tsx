import logo from "src/assets/images/Logo.svg";

const Header = () => {
  return (
    <header className="bg-banner bg-cover bg-center h-48 flex items-center justify-center">
      <h1>
        <img src={logo} alt="Logo World Ranks" />
      </h1>
    </header>
  );
};

export default Header;
