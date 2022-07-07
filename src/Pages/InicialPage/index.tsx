import './Stylles.scss';
import { Link } from 'react-router-dom';

export function InicialPage() {
  return (
    <body>
      <div className='inicial-page'>
        <Link to={'Home'}>
          <div className='div-principal'></div>
        </Link>
      </div>
    </body>
  );
}
