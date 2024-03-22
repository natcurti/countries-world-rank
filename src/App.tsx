import Header from "./components/Header";
import { CountriesContextProvider } from "./context/CountriesContext";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CountriesContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </CountriesContextProvider>
    </BrowserRouter>
  );
}

export default App;
