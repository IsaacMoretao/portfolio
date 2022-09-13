import './Stylle.scss';
import projetoA from '../../Assets/ProjetoMusic.png';
import projetoB from '../../Assets/ProjetoInsta-dog.png';
import projetoC from '../../Assets/ProjetoTesla.png';
import projetoD from '../../Assets/NetflixProject.png';

export function ProjectStars() {
  return(

    <>

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

        <a href="https://github.com/IsaacMoretao/Netflix"  target="_blank">
          <section>
            <img src={projetoD} alt="Netflix" />
            <span>Netflix</span>
          </section>
        </a>

      </article>
    </>
    
  )

}