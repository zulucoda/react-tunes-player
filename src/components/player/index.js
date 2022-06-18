import React from 'react';
import { NoTunes } from '../old-v5-player/no-tunes';
import { TunesPropTypes } from '../../utils/constants';

/**
 * Player v6
 * @param {Tunes} tunes
 * @returns {JSX.Element}
 * @constructor
 */
const Player = ({ tunes = [] }) => {
  if (tunes.length === 0) {
    return <NoTunes />;
  }
  return <div>nothing yet</div>;
};

Player.propTypes = TunesPropTypes;

export default Player;
