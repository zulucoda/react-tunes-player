"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactTunesPlayerReducer = exports.ReactTunesPlayerContainer = undefined;

var _reactTunesPlayerContainer = require("./react-tunes-player-container");

var _reactTunesPlayerContainer2 = _interopRequireDefault(
  _reactTunesPlayerContainer
);

var _reactTunesPlayerReducer2 = require("./react-tunes-player-reducer");

var _reactTunesPlayerReducer3 = _interopRequireDefault(
  _reactTunesPlayerReducer2
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.ReactTunesPlayerContainer = _reactTunesPlayerContainer2.default; // import ReactTunePlayer from './react-tunes-player-container';
// import ReactTunePlayerReducer from './react-tunes-player-reducer';

// module.exports = {
//   ReactTunePlayer: ReactTunePlayer,
//   ReactTunePlayerReducer: ReactTunePlayerReducer
// };

exports.reactTunesPlayerReducer = _reactTunesPlayerReducer3.default;
