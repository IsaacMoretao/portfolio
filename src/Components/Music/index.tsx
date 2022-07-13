import Blues from '../../Assets/Blues.mp3';
import { Player, Audio, Controls, PlaybackControl } from '@vime/react';
import './Style.scss'


export function Music() {
/*import Gif from '../../Assets/giphy.gif';
import StaticGIF from '../../Assets/staticGif.png'
const [isStaticGIF, setIsStaticGIF] = React.useState(false);

const onClickGIF = () => setIsStaticGIF(!isStaticGIF);
<img onClick={onClickGIF} src={isStaticGIF ? StaticGIF : Gif} alt="Descrição da imagem" />*/
return (
  <div className='div-music'>
  
    <Player loop>
      <Audio>
        <source data-src={Blues} type="audio/mp3" />
      </Audio>
      <div>
        <Controls pin="center">
          <PlaybackControl hideTooltip style={{fontSize: '40px', color: 'White', marginRight: '155px' }}/>
        </Controls>
      </div>
      
    </Player>

  </div>
);
}