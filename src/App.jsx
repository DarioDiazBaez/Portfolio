import { BrowserRouter, HashRouter, Route, Routes, } from "react-router-dom";
// import "./App.css"
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import AplicacionesConReactPage from "./pages/AplicacionesConReactPage";
import AplicacionesSimplesPage from "./pages/AplicacionesSimplesPage";
import PortafolioPage from "./pages/PortafolioPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
  <div>
    <div className="fondo"/>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/appreact" element={<AplicacionesConReactPage />} />  
        <Route path="/appsimple" element={<AplicacionesSimplesPage />} />
        <Route path="/portafolio" element={<PortafolioPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  </div>
  );
}