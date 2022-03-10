import { BrowserRouter, HashRouter, Route, Routes, } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BuscadorImgPage from "./pages/BuscadorImgPage";
import MemeGeneratorPage from "./pages/MemeGeneratorPage";
import AplicacionesSimplesPage from "./pages/AplicacionesSimplesPage";
import PortafolioPage from "./pages/PortafolioPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buscadorimg" element={<BuscadorImgPage />} />  
        <Route path="/memegenerator" element={<MemeGeneratorPage />} />
        <Route path="/calculadora" element={<AplicacionesSimplesPage />} />
        <Route path="/portafolio" element={<PortafolioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}