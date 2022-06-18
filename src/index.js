/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/08/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import { Player as OldPlayer } from './components/old-v5-player/player';
import PlayerV6 from './components/player';
import { TunesPropTypes } from './utils/constants';

const ReactTunesPlayer = ({ tunes, oldPlayer = false }) => {
  if (oldPlayer) {
    return <OldPlayer tunes={tunes} />;
  }

  return <PlayerV6 tunes={tunes} />;
};

ReactTunesPlayer.propTypes = TunesPropTypes;

export default ReactTunesPlayer;
