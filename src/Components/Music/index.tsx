import Blues from '../../Assets/Moon - Do Not Look Back.mp3';
import { Player, Audio, Controls, PlaybackControl } from '@vime/react';
import './Style.scss'


export function Music() {

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