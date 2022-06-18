import { arrayOf, bool, exact, string } from 'prop-types';

export const HIGH_VOLUME = 1;
export const MEDIUM_VOLUME = 0.5;
export const LOW_VOLUME = 0.3;
export const MUTE_VOLUME = 0;

export const TunesPropTypes = {
  tunes: arrayOf(
    exact({
      tune: string.isRequired,
      name: string.isRequired,
      album: string.isRequired,
    }),
  ).isRequired,
  oldPlayer: bool,
};
