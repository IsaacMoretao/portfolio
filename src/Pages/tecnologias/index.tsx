import { CaretCircleLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';
import Isaac from '../../Assets/Isaac.png';
import logo from '../../Assets/logo.png';

import html from '../../Assets/Tec/html-5.png';
import css from '../../Assets/Tec/css-3.png';
import js from '../../Assets/Tec/js.png';
import typescript from '../../Assets/Tec/typescript.png';

import react from '../../Assets/structure.png';
import Next from '../../Assets/free_icon_1.svg';
import scss from '../../Assets/Tec/sass.png';
import tailwind from '../../Assets/Tec/tailwind-css.png';

import './Stylles.scss';
import { Usados } from '../../Components/MaisUsados';
import { useState } from 'react';

export function Tecnologias() {

  const [Load, setLoad] = useState('flex')
  const [Page, setPage] = useState('none')

  function handleLoad(){
    setPage('block')
    setLoad('none')
  }

  return(
    <body>

      <figure style={{display: `${Load}`}} className='Loading'>
        carregando...
      </figure>

      <div style={{display: `${Page}`}} className='BodyTec' onLoad={handleLoad}>
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
        <div>.</div>
        <div className='Tecnologias'>
          <strong id='Font'>&#36;&#123; Tecnologias &#125;</strong>
          <div>
            <section style={{width: '500px', color: '#8a000000'}} id='sectionUm'>ldadawadwwlkjf</section>

            
            <section id='html'>
              <p>Html</p>
                <img src={html} alt="Html-icon"  />
            </section>
            <section>
              <p>Css</p>
                <img src={css} alt="Css-icon" id='css'/>
              
            </section>
            <section>
              <p>Scss</p>
                <img src={scss} alt="Css-icon" id='css'/>
              
            </section>
            <section>
              <p>tailwind</p>
                <img src={tailwind} alt="Css-icon" id='css'/>
              
            </section>
            <section>
              <p>JavaScript</p>
                <img src={js} alt="JavaScript-icon" id='javaS'/>
              
            </section>
            <section>
              <p>TypeScript</p>
                <img src={typescript} alt="TypeScript-icon" id='typeScript'/>
              
            </section>
            <section>
              <p>ReactJS</p>
                <img src={react} alt="ReactJS-icon" id='react'/>
              
            </section>
            <section>
              <p>NextJS</p>
                <img src={Next} alt="NextJS-icon" id='Next' />
              
            </section>
            
          </div>
        </div>

        <div className='Proj'>
          <strong id='Font'>&#36;&#123; MAIS USADOS &#125;</strong>
          <div>
            
            <Usados
            Name={'TypeScript'}
            text={'O futuro da programação front-End é o type Script, permitindo que trabalhe com tipagens entre recursos'}
            margin={'0'}/>

            <Usados
            Name={'Sass'}
            text={'O sass deixa seu Codigo "scss" em formato de cascata, melhorando a visibilidade do codigo e deixando ele mais curto'}
            margin={'150px'}/>

            <Usados
            Name={'ReactJS'}
            text={'Proporcionando inumeras funcionalidades indispensaveis, o React é uma biblioteca que não poderia ficar de fora dessa lista '}
            margin={'0'}/>

            <Usados
            Name={'tailwindcss'}
            text={'Perfeito para projetos menores, o tailwind ultiliza classes ultilitarias, permitindo que não haja folhas de estilos desnecessárias '}
            margin={'150px'}/>

          </div>
          

          

        </div>
          

        
        
  
      </div>
    </body>
  )
}