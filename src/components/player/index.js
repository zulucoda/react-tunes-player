import React from 'react';
import { arrayOf, exact, string } from 'prop-types';
import { NoTunes } from '../old-v5-player/no-tunes';

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

Player.propTypes = {
  tunes: arrayOf(
    exact({
      tune: string.isRequired,
      name: string.isRequired,
      album: string.isRequired,
    }),
  ).isRequired,
};

export default Player;
