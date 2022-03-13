import { BrowserRouter, HashRouter, Route, Routes, } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AplicacionesConReactPage from "./pages/AplicacionesConReactPage";
import AplicacionesSimplesPage from "./pages/AplicacionesSimplesPage";
import PortafolioPage from "./pages/PortafolioPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appreact" element={<AplicacionesConReactPage />} />  
        <Route path="/appsimple" element={<AplicacionesSimplesPage />} />
        <Route path="/portafolio" element={<PortafolioPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}