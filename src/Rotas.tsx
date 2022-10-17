import './globals.scss';
import { Home } from './Pages/Home';
import { Route, Routes } from "react-router-dom";
import { Project } from "./Pages/Projeto/index";
import Contato from "./Pages/Contato/index";
import { Tecnologias } from "./Pages/tecnologias/index";
import { Sobre } from "./Pages/Sobre";
import { useState } from "react";

function Rotas() {
  const [Load, setLoad] = useState('flex')
  const [Page, setPage] = useState('none')

  function handleLoad(){
    setPage('block')
    setLoad('none')
  }

  return (
    <>
      <figure style={{display: `${Load}`}}  className='Loading'>
        carregando...
      </figure>
      <div onLoad={handleLoad} style={{display: `${Page}`}}>
        <Routes>
          <Route path="/portfolio/" element={<Home />}/>
          <Route path="/portfolio/Home/Project" element={<Project />} />
          <Route path="/portfolio/Home/Contato" element={<Contato />} />
          <Route path="/portfolio/Home/Tecnologias" element={<Tecnologias />} />
          <Route path="/portfolio/Home/Sobre" element={<Sobre />} />
        </Routes>
      </div>

    </>

  )
}
export default Rotas