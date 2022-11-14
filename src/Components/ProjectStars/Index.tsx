import './Stylle.scss';
import projetoA from '../../Assets/Proj/ProjetoMusic.png';
import projetoB from '../../Assets/Proj/ProjetoInsta-dog.png';
import projetoC from '../../Assets/Proj/ProjetoTesla.png';
import projetoD from '../../Assets/Proj/NetflixProject.png';
import projetoE from '../../Assets/Proj/DesignSistem.png';
import projetoF from '../../Assets/Proj/Letmeask.png';
import projetoG from '../../Assets/Proj/Mobile.png';
import { useState } from 'react';

export function ProjectStars() {
  const [Load, setLoad] = useState('flex')
  const [Page, setPage] = useState('none')

  function handleLoad(){
    setPage('block')
    setLoad('none')

  }

  return(
    <div onLoad={handleLoad}>

      <figure style={{display: `${Load}`}} className='Loading'>
        carregando... 
      </figure>
    
      <body style={{display: `${Page}`}}>
    
        <h1 className='Principais'>Principais Projetos</h1>
        <article className='articleProjects'>
    
          <a href="https://github.com/IsaacMoretao/theMusic" target="_blank">
            <section>
              <img src={projetoA} alt="The-Music" />
              <span>The Music</span>
            </section>
          </a>
    
          <a href="https://github.com/IsaacMoretao/Insta-dog" target="_blank">
            <section>
              <img src={projetoB} alt="Insta-Dog" />
              <span>Insta Dog</span>
            </section>
          </a>
    
          <a href="https://github.com/IsaacMoretao/TeslaSite" target="_blank">
            <section>
              <img src={projetoC} alt="Site-da-Tesla" />
              <span>Tesla</span>
            </section>
          </a>
    
          <a href="https://github.com/IsaacMoretao/Netflix" target="_blank">
            <section>
              <img src={projetoD} alt="Netflix" />
              <span>Netflix</span>
            </section>
          </a>
    
          <a href="https://isaacmoretao.github.io/React-design-isistem/" target="_blank">
            <section>
              <img src={projetoE} alt="Design sistem" />
              <span>Design sistem</span>
            </section>
          </a>
    
          <a href="https://github.com/IsaacMoretao/Letmeask" target="_blank">
            <section>
            <img src={projetoF} alt="Letmeask" />
              <span>Letmeask</span>
            </section>
          </a>
    
          <a target="_blank">
            <section>
              <img src={projetoG} alt="" />
              <span>&lt; NLW &frasl;&gt; Copa</span>
            </section>
          </a>
    
        </article>
      </body>
    </div>
    
  )

}