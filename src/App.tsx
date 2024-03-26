import Header from "./components/Header";
import { CountriesContextProvider } from "./context/CountriesContext";
import { FiltersContextProvider } from "./context/FiltersContext";
import DetailsPage from "./pages/DetailsPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CountriesContextProvider>
        <FiltersContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<DetailsPage />} />
          </Routes>
        </FiltersContextProvider>
      </CountriesContextProvider>
    </BrowserRouter>
  );
}

export default App;
