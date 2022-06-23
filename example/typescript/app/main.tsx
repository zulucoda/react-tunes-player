import React from 'react';
import ReactDOM from 'react-dom';
import ReactTunesPlayer from 'react-tunes-player';

const data = [
  {
    tune:
      'https://react-tunes-player.mfbproject.co.za/assets/audio/the_lego_tune.ogg',
    name: 'The lego tune',
    album: 'https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg',
  },
  {
    tune:
      'https://react-tunes-player.mfbproject.co.za/assets/audio/bensound-funkysuspense.mp3',
    name: 'Funky Suspense',
    album:
      'https://react-tunes-player.mfbproject.co.za/assets/images/funkysuspense.jpg',
  },
];



ReactDOM.render(<ReactTunesPlayer tunes={data} oldPLayer={true} />, document.querySelector('.app'));
