/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const initialState = {
  tunes: [],
  current: {
    tune: '',
    name: '',
    album: ''
  },
  player: {
    isPlaying: false
  }
};

const REACT_TUNES_PLAYER_SET_TUNES = 'REACT_TUNES_PLAYER_SET_TUNES';
const REACT_TUNES_PLAYER_SET_CURRENT_TUNE = 'REACT_TUNES_PLAYER_SET_CURRENT_TUNE';
const REACT_TUNES_PLAYER_TOGGLE_PLAY_OR_PAUSE = 'REACT_TUNES_PLAYER_TOGGLE_PLAY_OR_PAUSE';

export const setTunes = (payload) => ({
  type: REACT_TUNES_PLAYER_SET_TUNES,
  payload
});

export const setCurrentTune = (payload) => ({
  type: REACT_TUNES_PLAYER_SET_CURRENT_TUNE,
  payload
});

export const togglePlayOrPause = () => ({
  type: REACT_TUNES_PLAYER_TOGGLE_PLAY_OR_PAUSE
});

const reactTunePlayerReducer = (state = initialState, action) => {
  switch(action.type) {
    case REACT_TUNES_PLAYER_SET_TUNES:
      return {
        ...state,
        tunes: [
          ...action.payload
        ]
      };
    case REACT_TUNES_PLAYER_SET_CURRENT_TUNE:
      return {
        ...state,
        current: {
          ...action.payload
        }
      };
    case REACT_TUNES_PLAYER_TOGGLE_PLAY_OR_PAUSE:
      return {
        ...state,
        player: {
          isPlaying: !state.player.isPlaying
        }
      }
    default:
      return {
        ...state
      };
  }
};

export default reactTunePlayerReducer;

