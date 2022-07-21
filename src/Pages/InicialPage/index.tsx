import './Stylles.scss';
import { Link } from 'react-router-dom';

export function InicialPage() {
  return (
    <body>
      <div className='inicial-page'>
        <Link to={'/portfolio/'}>
          <div className='div-principal'></div>
          <h2>Click aqui</h2>
        </Link>
      </div>
    </body>
  );
}
