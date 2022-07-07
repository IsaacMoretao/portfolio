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
      <Route path="/deploying-vite-project-example/" element={<InicialPage />} />
      <Route path="/deploying-vite-project-example/Home" element={<Home />} />
      <Route path="/deploying-vite-project-example/Home/Project" element={<Project />} />
      <Route path="/deploying-vite-project-example/Home/Contato" element={<Contato />} />
      <Route path="/deploying-vite-project-example/Home/Tecnologias" element={<Tecnologias />} />
      <Route path="/deploying-vite-project-example/Home/Sobre" element={<Sobre />} />
    </Routes>
  )
}
export default Rotas;