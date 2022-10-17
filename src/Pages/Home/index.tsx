import { BotaoLink } from '../../Components/Link/Index';
import Logo from '../../Assets/logo.png';
import './Stylles.scss';
import { Link } from 'react-router-dom';
import { WhatsappLogo, LinkedinLogo, InstagramLogo, GithubLogo } from 'phosphor-react';
import { useState } from 'react';



export function Home() {
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

      <div className="Home-Body" style={{display: `${Page}`}} onLoad={handleLoad}>
        
        <header className="H-red">
          <figure className='div-Logo'>
            <img src={Logo} alt="" />
          </figure>
          
          <Link to='/portfolio/Home/Contato'>
            <BotaoLink text={'CONTATO'} posição={'horizontal-tb'} height={'48px'} width={'150px'} />
          </Link>
          

        </header>

        <main >
          <nav className="LaftNav">
            <div className='Contato'>

              <a href="https://web.whatsapp.com/send?phone=+5511999899429" target="_blank">
                <WhatsappLogo size={32} className='Discord'/>
              </a>

              <a href="https://www.linkedin.com/in/isaac-hana-moret%C3%A3o-1a32031a2/" target="_blank">
                <LinkedinLogo size={32} className='Linkedin'/>
              </a>

              <a href="https://www.instagram.com/isaac_moretao" target="_blank">
                <InstagramLogo size={32} className='Instagram'/>
              </a>

              <a href="https://github.com/IsaacMoretao" target="_blank">
                <GithubLogo size={32} className='Github'/>
              </a>
              
              <div/>
            </div>
          </nav>
          <figure></figure>
          <nav className="RightNav">
            <Link to='/portfolio/Home/Tecnologias'>
              <BotaoLink text={'TECNOLOGIAS'} posição={'vertical-lr'} height={'150px'} width={'48px'} />
            </Link> 
          </nav>
        </main>

        <footer className="Footer">
          <Link to={'/portfolio/Home/Sobre'}>
            <BotaoLink text={'SOBRE'} posição={'horizontal-tb'} height={'48px'} width={'150px'} />
          </Link>
          
          <Link to={'/portfolio/Home/Project'}>
            <BotaoLink text={'PROJETOS'} posição={'horizontal-tb'} height={'48px'} width={'150px'} />
          </Link>
          
        </footer>
      </div>
    </body>
  )
}