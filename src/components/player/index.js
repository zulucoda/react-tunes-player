import React from 'react';
import { NoTunes } from '../old-v5-player/no-tunes';
import { TunesPropTypes } from '../../utils/constants';
import { PlayerGrid } from '../../utils/theme';

/**
 * Player v6
 * @param {Tunes} tunes
 * @returns {JSX.Element}
 * @constructor
 */
const Player = ({ tunes = [] }) => {
  if (tunes.length === 0) {
    return (
      <PlayerGrid>
        <NoTunes />
      </PlayerGrid>
    );
  }
  return <PlayerGrid>player to come</PlayerGrid>;
};

Player.propTypes = TunesPropTypes;

export default Player;
