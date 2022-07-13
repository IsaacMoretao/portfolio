import './Stilles.scss';
import Pessoa from '../../Assets/pessoa.png';
import { Usados } from '../../Components/MaisUsados/index';
import { Link } from 'react-router-dom';

import { CaretCircleLeft } from 'phosphor-react';
import Isaac from '../../Assets/Isaac.png';
import logo from '../../Assets/logo.png';

export function Sobre() {
return(

<body className='Color'>
  <header className='headerProjects'>
    <Link to='/portfolio/Home'>
    <CaretCircleLeft className='Button' color="#ffffff" style={{marginLeft: '20px'}} />
    </Link>

    <Link to='/portfolio/Home/contato'>
    <img src={Isaac} alt="Logo-Isaac" />
    </Link>

    <Link to='/portfolio/'>
    <img src={logo} alt="" />
    </Link>

  </header>
  <div className='Sobre'>



    <article >
      <p className='P-1'>
        Olá! me chamo <br />
      </p>
      <strong className='P-2'>
        Isaac Moretao
      </strong> <br />
      <p className='P-3'>
        Sou Desenvolvedor Front-End
      </p>
    </article>
    <aside className='Asside'>
      <div>
        <div />
        <img src={Pessoa} alt="" />
      </div>
      <h1>Isaac Moretão</h1>

    </aside>
  </div>
  <div className='MaisSobre'>
    <p className='Paragrafo'>
      &#36;&#123; mais sobre mim &#125;
    </p>
    <div>

      <Usados Name={'Programação'} text={'Expecialização: ReactJS '}
        br={<br />}
        textDois={' Experiência com montagens Web com ReactJs e NextJs'} margin={'150px'} />

      <Usados Name={'Isaac'} text={'idade: 17'} textDois={'Cidade: Arujá-SP'} margin={'0'} />

      <Usados Name={'Work'} text={'Trabalho como freelancer junto com "Caio Cezar" , fazendo o front-END'}
        margin={'150px'} />

      <Usados Name={'Objetivo'} text={'Conseguir a primeira vaga como programador Front-End'} br={<br/>} textDois={''} margin={'0'} />

    </div>

  </div>
</body>
)
}