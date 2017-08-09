"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _reduxMockStore = require("redux-mock-store");

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _reactTunesPlayerContainer = require("../react-tunes-player-container");

var _reactTunesPlayerContainer2 = _interopRequireDefault(
  _reactTunesPlayerContainer
);

var _reactTunesPlayerReducer = require("../react-tunes-player-reducer");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe("React Tunes Player Container and View - Unit Test", function() {
  var initialState = {
    reactTunesPlayerReducer: {
      tunes: [],
      current: {
        tune: "",
        name: "",
        album: ""
      },
      player: {
        isPlaying: false
      }
    }
  };

  var mockStore = (0, _reduxMockStore2.default)();
  var store = void 0,
    wrapper = void 0;

  beforeEach(function() {
    store = mockStore(initialState);
    wrapper = (0, _enzyme.shallow)(
      _react2.default.createElement(_reactTunesPlayerContainer2.default, {
        store: store
      })
    );
  });

  it("should mapStateToProp tunes to _tunes", function() {
    expect(wrapper.node.props._tunes).toEqual(
      initialState.reactTunesPlayerReducer.tunes
    );
  });

  it("should mapStateToProp current to _current", function() {
    expect(wrapper.node.props._current).toEqual(
      initialState.reactTunesPlayerReducer.current
    );
  });

  it("should mapStateToProp player to _player", function() {
    expect(wrapper.node.props._player).toEqual(
      initialState.reactTunesPlayerReducer.player
    );
  });

  it("should mapDispatchToProps setTunes", function() {
    expect(wrapper.node.props.setNextTune()).toEqual(
      (0, _reactTunesPlayerReducer.setNextTune)()
    );
  });

  it("should mapDispatchToProps setPreviousTune", function() {
    expect(wrapper.node.props.setPreviousTune()).toEqual(
      (0, _reactTunesPlayerReducer.setPreviousTune)()
    );
  });

  it("should mapDispatchToProps setTunes", function() {
    expect(wrapper.node.props.setTunes()).toEqual(
      (0, _reactTunesPlayerReducer.setTunes)()
    );
  });

  it("should mapDispatchToProps setCurrentTune", function() {
    expect(wrapper.node.props.setCurrentTune()).toEqual(
      (0, _reactTunesPlayerReducer.setCurrentTune)()
    );
  });

  it("should mapDispatchToProps playCurrentTune", function() {
    expect(wrapper.node.props.playCurrentTune()).toEqual(
      (0, _reactTunesPlayerReducer.playCurrentTune)()
    );
  });

  it("should mapDispatchToProps pauseCurrentTune", function() {
    expect(wrapper.node.props.pauseCurrentTune()).toEqual(
      (0, _reactTunesPlayerReducer.pauseCurrentTune)()
    );
  });
}); /**
     * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/08/05.
     * Copyright mfbproject.co.za - muzi@mfbproject.co.za
     * Copyright zulucoda - mfbproject
     */
