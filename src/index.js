import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Player } from './components/react-tunes-player/components/player';

ReactDOM.render(
  <Player
    tunes={[
      {
        tune:
          'https://react-tunes-player.mfbproject.co.za/assets/audio/the_lego_tune.ogg',
        name: 'The lego tune',
        album:
          'https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg',
      },
      {
        tune:
          'https://react-tunes-player.mfbproject.co.za/assets/audio/bensound-funkysuspense.mp3',
        name: 'Funky Suspense',
        album:
          'https://react-tunes-player.mfbproject.co.za/assets/images/funkysuspense.jpg',
      },
    ]}
  />,
  document.getElementById('root'),
);
registerServiceWorker();
