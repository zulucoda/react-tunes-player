"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactTunesPlayerReducer = require("./react-tunes-player-reducer");

var _reactTunesPlayerView = require("./react-tunes-player-view");

var _reactTunesPlayerView2 = _interopRequireDefault(_reactTunesPlayerView);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
var mapStateToProps = (exports.mapStateToProps = function mapStateToProps(
  _ref
) {
  var reactTunesPlayerReducer = _ref.reactTunesPlayerReducer;
  return {
    _tunes: reactTunesPlayerReducer.tunes,
    _current: reactTunesPlayerReducer.current,
    _player: reactTunesPlayerReducer.player
  };
});

var mapDispatchToProps = (exports.mapDispatchToProps = function mapDispatchToProps(
  dispatch
) {
  return (0, _redux.bindActionCreators)(
    {
      setTunes: _reactTunesPlayerReducer.setTunes,
      setCurrentTune: _reactTunesPlayerReducer.setCurrentTune,
      playCurrentTune: _reactTunesPlayerReducer.playCurrentTune,
      pauseCurrentTune: _reactTunesPlayerReducer.pauseCurrentTune,
      setNextTune: _reactTunesPlayerReducer.setNextTune,
      setPreviousTune: _reactTunesPlayerReducer.setPreviousTune
    },
    dispatch
  );
});

var ReactTunesPlayerContainer = (0, _reactRedux.connect)(
  mapStateToProps,
  mapDispatchToProps
)(_reactTunesPlayerView2.default);
exports.default = ReactTunesPlayerContainer;
