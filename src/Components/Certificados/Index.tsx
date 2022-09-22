import './Stylles.scss';
import Rocket from '../../Assets/Certificados/Discover.png'
import Origamid from '../../Assets/Certificados/Origamid.png'
import Coder from '../../Assets/Certificados/Coder.jpg'

export function Certificados(){
  return(
    <div className='Certificados'>
      <strong className='Chavs'>
        &#36;&#123; meus certificados &#125;
      </strong>
      
      <section className='Certificados-section'>

        <article>
          <header>
            Discover
          </header>
          <img src={Rocket} alt="Rocketseat" />
        </article>

        <article >
          <header>
            Origamid
          </header>
          <img src={Origamid} alt="Origamid" />
        </article>

        <article>
          <header>
            Coder
          </header>
          <img src={Coder} alt="Coder" />
        </article>

      </section>
    
    </div>
  )
}