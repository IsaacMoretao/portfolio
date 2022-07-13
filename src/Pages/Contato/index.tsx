import './Stylle.scss';
import { Link } from 'react-router-dom';
import { CaretCircleLeft, Envelope, Phone } from 'phosphor-react';
import logo from '../../Assets/logo.png';

export function Contato() {

return(
<div className='todoCont'>

  <header className='header-contato'>
    <Link to="/portfolio/Home">
      <CaretCircleLeft className='Button' color="#ffffff" style={{marginLeft: '20px'}} />
    </Link>

    <strong>vamos trabalhar <span>juntos?</span></strong>

    <Link to='/portfolio/'>
      <img src={logo} alt="" style={{height: '50px', marginRight: '20px'}} />
    </Link>

  </header>

  <main className='Main-cont'>
    <div className='leftCont'>
      <img
        src='https://img.freepik.com/free-photo/team-unity-friends-meeting-partnership-concept_53876-23043.jpg?w=740&t=st=1649776329~exp=1649776929~hmac=053979b60c43145629b8366e5d6b75ca10921f0b82421e227a1c5fcb6cf93b1c'
        alt="" />
      <p>”O ferro é afiado com ferro, e o ser humano aprende com outro ser humano.” </p>
    </div>
    <section>
      <article>

        <h1>Telefone</h1>
        <p>&nbsp;Estarei disponivel em horário comercial, de segunda a sexta</p>
        <a href="https://web.whatsapp.com/send?phone=+5511999899429" target="_blank">
          <b>
            <Phone size={32} style={{ marginBottom: '-8px'}}/>(11) 99989-9429
          </b>
        </a>
      </article>

      <article>
        
        <h1>G-mail</h1>
        <p>&nbsp;Entrarei em contato o mais breve possível durante o horario comercial</p>
        <a href="mailto:isaachanam@gmail.com? subject=subject text">
          <b>
            <Envelope size={32} style={{marginBottom: '-8px'}}/>isaachanam@gmail.com
          </b>
        </a>
      </article>
    </section>

  </main>

  <footer className='Fot-Contato'>

    <span>&copy;Isaac Moretão</span>

  </footer>

</div>
)
}
export default Contato;