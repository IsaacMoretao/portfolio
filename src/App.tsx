import Rotas from './Rotas';
import './globals.scss';
import { BrowserRouter } from 'react-router-dom';
import { Music } from './Components/Music/index';



function App() {

  return (
    <div className="App">
      <div style={{ position: 'absolute' }}>
        <Music />
      </div>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  )
}

export default App
