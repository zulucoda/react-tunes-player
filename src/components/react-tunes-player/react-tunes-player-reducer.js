/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import _findIndex from "lodash/findIndex";
import { HIGH_VOLUME } from './constants'

const initialState = {
  tunes: [],
  current: {
    tune: "",
    name: "",
    album: ""
  },
  player: {
    isPlaying: false,
    time: 0,
    duration: 0,
    volume: HIGH_VOLUME
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
const REACT_TUNES_PLAYER_SET_SEEK_TIME_TUNE =
  "REACT_TUNES_PLAYER_SET_SEEK_TIME_TUNE";
const REACT_TUNES_PLAYER_SET_TUNE_DURATION = 'REACT_TUNES_PLAYER_SET_TUNE_DURATION';
const REACT_TUNES_PLAYER_SET_VOLUME = 'REACT_TUNES_PLAYER_SET_VOLUME';

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

export const setSeekTimeTune = payload => ({
  type: REACT_TUNES_PLAYER_SET_SEEK_TIME_TUNE,
  payload
});

export const setTuneDuration = payload => ({
  type: REACT_TUNES_PLAYER_SET_TUNE_DURATION,
  payload
});

export const setVolume = payload => ({
  type: REACT_TUNES_PLAYER_SET_VOLUME,
  payload
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
          ...state.player,
          isPlaying: true
        }
      };
    case REACT_TUNES_PLAYER_PAUSE_CURRENT_TUNE:
      return {
        ...state,
        player: {
          ...state.player,
          isPlaying: false
        }
      };
    case REACT_TUNES_PLAYER_SET_SEEK_TIME_TUNE:
      return {
        ...state,
        player: {
          ...state.player,
          time: action.payload
        }
      };
      case REACT_TUNES_PLAYER_SET_TUNE_DURATION:
      return {
        ...state,
        player: {
          ...state.player,
          duration: action.payload
        }
      };
      case REACT_TUNES_PLAYER_SET_VOLUME:
      return {
        ...state,
        player: {
          ...state.player,
          volume: action.payload
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
