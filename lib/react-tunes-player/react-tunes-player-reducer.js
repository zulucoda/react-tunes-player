"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPreviousTune = exports.setNextTune = exports.pauseCurrentTune = exports.playCurrentTune = exports.setCurrentTune = exports.setTunes = undefined;

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }; /**
                                                                                                                                                                                                                                                                   * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
                                                                                                                                                                                                                                                                   * Copyright mfbproject.co.za - muzi@mfbproject.co.za
                                                                                                                                                                                                                                                                   * Copyright zulucoda - mfbproject
                                                                                                                                                                                                                                                                   */

var _findIndex2 = require("lodash/findIndex");

var _findIndex3 = _interopRequireDefault(_findIndex2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

var initialState = {
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

var REACT_TUNES_PLAYER_SET_TUNES = "REACT_TUNES_PLAYER_SET_TUNES";
var REACT_TUNES_PLAYER_SET_CURRENT_TUNE = "REACT_TUNES_PLAYER_SET_CURRENT_TUNE";
var REACT_TUNES_PLAYER_PLAY_CURRENT_TUNE =
  "REACT_TUNES_PLAYER_PLAY_CURRENT_TUNE";
var REACT_TUNES_PLAYER_PAUSE_CURRENT_TUNE =
  "REACT_TUNES_PLAYER_PAUSE_CURRENT_TUNE";
var REACT_TUNES_PLAYER_SET_NEXT_TUNE = "REACT_TUNES_PLAYER_SET_NEXT_TUNE";
var REACT_TUNES_PLAYER_SET_PREVIOUS_TUNE =
  "REACT_TUNES_PLAYER_SET_PREVIOUS_TUNE";

var setTunes = (exports.setTunes = function setTunes(payload) {
  return {
    type: REACT_TUNES_PLAYER_SET_TUNES,
    payload: payload
  };
});

var setCurrentTune = (exports.setCurrentTune = function setCurrentTune(
  payload
) {
  return {
    type: REACT_TUNES_PLAYER_SET_CURRENT_TUNE,
    payload: payload
  };
});

var playCurrentTune = (exports.playCurrentTune = function playCurrentTune() {
  return {
    type: REACT_TUNES_PLAYER_PLAY_CURRENT_TUNE
  };
});

var pauseCurrentTune = (exports.pauseCurrentTune = function pauseCurrentTune() {
  return {
    type: REACT_TUNES_PLAYER_PAUSE_CURRENT_TUNE
  };
});

var setNextTune = (exports.setNextTune = function setNextTune() {
  return {
    type: REACT_TUNES_PLAYER_SET_NEXT_TUNE
  };
});

var setPreviousTune = (exports.setPreviousTune = function setPreviousTune() {
  return {
    type: REACT_TUNES_PLAYER_SET_PREVIOUS_TUNE
  };
});

var reactTunesPlayerReducer = function reactTunesPlayerReducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];

  switch (action.type) {
    case REACT_TUNES_PLAYER_SET_TUNES:
      return _extends({}, state, {
        tunes: [].concat(_toConsumableArray(action.payload))
      });
    case REACT_TUNES_PLAYER_SET_CURRENT_TUNE:
      return _extends({}, state, {
        current: _extends({}, action.payload)
      });
    case REACT_TUNES_PLAYER_PLAY_CURRENT_TUNE:
      return _extends({}, state, {
        player: {
          isPlaying: true
        }
      });
    case REACT_TUNES_PLAYER_PAUSE_CURRENT_TUNE:
      return _extends({}, state, {
        player: {
          isPlaying: false
        }
      });
    case REACT_TUNES_PLAYER_SET_NEXT_TUNE:
      var next = (0, _findIndex3.default)(state.tunes, state.current) + 1;
      return _extends({}, state, {
        current: next >= state.tunes.length ? state.tunes[0] : state.tunes[next]
      });
    case REACT_TUNES_PLAYER_SET_PREVIOUS_TUNE:
      var previous = (0, _findIndex3.default)(state.tunes, state.current) - 1;
      return _extends({}, state, {
        current:
          previous <= -1
            ? state.tunes[state.tunes.length - 1]
            : state.tunes[previous]
      });
    default:
      return _extends({}, state);
  }
};

exports.default = reactTunesPlayerReducer;
