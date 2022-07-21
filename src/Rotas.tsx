import { InicialPage } from "./Pages/InicialPage/index";
import './globals.scss';
import { Home } from './Pages/Home';
import { Route, Routes } from "react-router-dom";
import { Project } from "./Pages/Projeto/index";
import Contato from "./Pages/Contato/index";
import { Tecnologias } from "./Pages/tecnologias/index";
import { Sobre } from "./Pages/Sobre";

function Rotas() {

  return (
    <Routes>
      <Route path="/portfolio/" element={<Home />} />
      <Route path="/portfolio/Home/Project" element={<Project />} />
      <Route path="/portfolio/Home/Contato" element={<Contato />} />
      <Route path="/portfolio/Home/Tecnologias" element={<Tecnologias />} />
      <Route path="/portfolio/Home/Sobre" element={<Sobre />} />
    </Routes>
  )
}
export default Rotas;