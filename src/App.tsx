import Rotas from './Rotas';
import './globals.scss';
import { BrowserRouter } from 'react-router-dom';
import { Music } from './Components/Music/index';



function App() {

  return (
    <div className="App">
      <div className='divMusic' style={{position: 'absolute', marginLeft: '25%'}}>
        <Music/>
      </div>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  )
}

export default App
