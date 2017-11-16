/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import _findIndex from "lodash/findIndex";

const initialState = {
  tunes: [],
  current: {
    tune: "",
    name: "",
    album: ""
  },
  player: {
    isPlaying: false
  }
};

const REACT_TUNES_PLAYER_SET_TUNES = "REACT_TUNES_PLAYER_SET_TUNES";
const REACT_TUNES_PLAYER_SET_CURRENT_TUNE =
  "REACT_TUNES_PLAYER_SET_CURRENT_TUNE";
const REACT_TUNES_PLAYER_PLAY_CURRENT_TUNE =
  "REACT_TUNES_PLAYER_PLAY_CURRENT_TUNE";
const REACT_TUNES_PLAYER_PAUSE_CURRENT_TUNE =
  "REACT_TUNES_PLAYER_PAUSE_CURRENT_TUNE";
const REACT_TUNES_PLAYER_SET_NEXT_TUNE = "REACT_TUNES_PLAYER_SET_NEXT_TUNE";
const REACT_TUNES_PLAYER_SET_PREVIOUS_TUNE =
  "REACT_TUNES_PLAYER_SET_PREVIOUS_TUNE";

export const setTunes = payload => ({
  type: REACT_TUNES_PLAYER_SET_TUNES,
  payload
});

export const setCurrentTune = payload => ({
  type: REACT_TUNES_PLAYER_SET_CURRENT_TUNE,
  payload
});

export const playCurrentTune = () => ({
  type: REACT_TUNES_PLAYER_PLAY_CURRENT_TUNE
});

export const pauseCurrentTune = () => ({
  type: REACT_TUNES_PLAYER_PAUSE_CURRENT_TUNE
});

export const setNextTune = () => ({
  type: REACT_TUNES_PLAYER_SET_NEXT_TUNE
});

export const setPreviousTune = () => ({
  type: REACT_TUNES_PLAYER_SET_PREVIOUS_TUNE
});

const reactTunesPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REACT_TUNES_PLAYER_SET_TUNES:
      return {
        ...state,
        tunes: [...action.payload]
      };
    case REACT_TUNES_PLAYER_SET_CURRENT_TUNE:
      return {
        ...state,
        current: {
          ...action.payload
        }
      };
    case REACT_TUNES_PLAYER_PLAY_CURRENT_TUNE:
      return {
        ...state,
        player: {
          isPlaying: true
        }
      };
    case REACT_TUNES_PLAYER_PAUSE_CURRENT_TUNE:
      return {
        ...state,
        player: {
          isPlaying: false
        }
      };
    case REACT_TUNES_PLAYER_SET_NEXT_TUNE:
      const next = _findIndex(state.tunes, state.current) + 1;
      return {
        ...state,
        current: next >= state.tunes.length ? state.tunes[0] : state.tunes[next]
      };
    case REACT_TUNES_PLAYER_SET_PREVIOUS_TUNE:
      const previous = _findIndex(state.tunes, state.current) - 1;
      return {
        ...state,
        current:
          previous <= -1
            ? state.tunes[state.tunes.length - 1]
            : state.tunes[previous]
      };
    default:
      return {
        ...state
      };
  }
};

export default reactTunesPlayerReducer;
