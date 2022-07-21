import './Stylle.scss';
import ReactJs from '../../Assets/React-icon.png';
import { Projeto } from '../../Components/project/Index';

import { useEffect, useState } from 'react';
import Isaac from '../../Assets/Isaac.png';
import logo from '../../Assets/logo.png';

import { CaretCircleLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';
import projectUm from '../../Assets/ProjectDestack.png'

import projectDois from '../../Assets/Destaque-2.png'
import projectTres from '../../Assets/DestackProject-3.png' 

type Repository = {
  name: string;
  description: string;
  clone_url: string;
}

export function Project() {

    const [repositories, setRepositories] = useState<Repository[]>([])
  
    useEffect(() => {
      fetch('https://api.github.com/users/IsaacMoretao/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
    }, [])

  return(
  <body >
    <div className="Project">

      <header className='headerProjects'>
        <Link to='/portfolio/' >
         <CaretCircleLeft className='Button' color="#ffffff" style={{marginLeft: '20px'}} />
        </Link>
        
        <Link to='/portfolio/Home/contato'>
          <img src={Isaac} alt="Logo-Isaac" />
        </Link>
        
        <figure>
          <img src={logo} alt="" />
        </figure>
        
      </header>


      <div className='backGround-react'>
        <img src={ReactJs}/>
      </div>
      <div className='Repositorios'>
          {repositories.map (repo => {
          return (
            
            <Projeto key={repo.name} Title={repo.name} Paragrafo={repo.description} url={repo.clone_url}/>
          
          )
        })}
      </div>

      <div className='Destaque'>

        
        <section className='projeto-1' >
          <header>Brazilian</header>
          <img src={projectUm} alt="Project" />
          <footer>
            Privado
          </footer>
        </section>

        <section className='projeto-1' >
          <header>React-Js</header>
          <img src={projectDois} alt="Project" />
          <footer>
            <a href="https://github.com/IsaacMoretao/ReactJS" target="_blank">Projeto</a>
            
          </footer>
        </section>
        <section className='projeto-1' >
          <header>Hooks</header>
          <img src={projectTres} alt="Project" />
          <footer>
            <a href="https://github.com/IsaacMoretao/Hooks" target="_blank">Projeto</a>
          </footer>
        </section>
      </div>
        
    </div>
  </body>
  )

}