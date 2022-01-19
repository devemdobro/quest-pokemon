import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { PokemonDetailsPage } from "../pages/pokemon-details-page";
//import { PokemonDetails } from "../components/pokemon-details";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:name" element={<PokemonDetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
