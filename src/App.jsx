import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initPixel } from "./lib/pixel";

import Home from "./pages/Home";
import Obrigado from "./pages/Obrigado";
import Oferta from "./pages/Oferta";

export default function App() {
  useEffect(() => {
    initPixel();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obrigado" element={<Obrigado />} />
        <Route path="/oferta" element={<Oferta />} />
      </Routes>
    </BrowserRouter>
  );
}
