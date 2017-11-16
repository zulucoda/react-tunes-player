"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/08/04.
                                                                                                                                                                                                                                                                   * Copyright mfbproject.co.za - muzi@mfbproject.co.za
                                                                                                                                                                                                                                                                   * Copyright zulucoda - mfbproject
                                                                                                                                                                                                                                                                   */


var _reactTunesPlayerReducer = require("../react-tunes-player-reducer");

var _reactTunesPlayerReducer2 = _interopRequireDefault(_reactTunesPlayerReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

describe("React Tune Player Reducer - Unit Test", function () {
  function stateBefore() {
    return {
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
  }

  function tunes() {
    return [{
      tune: "some tune 1",
      name: "some name 1",
      album: "some album 1"
    }, {
      tune: "some tune 2",
      name: "some name 2",
      album: "some album 2"
    }, {
      tune: "some tune 3",
      name: "some name 3",
      album: "some album 3"
    }, {
      tune: "some tune 4",
      name: "some name 4",
      album: "some album 4"
    }, {
      tune: "some tune 5",
      name: "some name 5",
      album: "some album 5"
    }];
  }

  it("should return initial state", function () {
    var action = {};

    var actual = (0, _reactTunesPlayerReducer2.default)(undefined, action);

    var expected = _extends({}, stateBefore());

    expect(actual).toEqual(expected);
  });

  it("should return current state when unknown action is dispatched", function () {
    var action = {
      type: "UNKNOWN_ACTION"
    };

    var _stateBefore = _extends({}, stateBefore(), {
      current: {
        tune: "some tune",
        name: "some name",
        album: "some album"
      }
    });

    var actual = (0, _reactTunesPlayerReducer2.default)(_stateBefore, action);

    var expected = _extends({}, _stateBefore);

    expect(actual).toEqual(expected);
  });

  describe("set tunes", function () {
    it("should return state with tunes set when setTunes action is dispatched", function () {
      var action = (0, _reactTunesPlayerReducer.setTunes)(tunes());

      var actual = (0, _reactTunesPlayerReducer2.default)(stateBefore(), action);

      var expected = _extends({}, stateBefore(), {
        tunes: [].concat(_toConsumableArray(tunes()))
      });

      expect(actual).toEqual(expected);
    });
  });

  describe("set current tune", function () {
    it("should return state with current tune set when set current tune action is dispatched", function () {
      var action = (0, _reactTunesPlayerReducer.setCurrentTune)(tunes()[3]);

      var actual = (0, _reactTunesPlayerReducer2.default)(stateBefore(), action);

      var expected = _extends({}, stateBefore(), {
        current: tunes()[3]
      });

      expect(actual).toEqual(expected);
    });
  });

  describe("play current tune", function () {
    it("should return state with isPlaying set to true when playCurrentTune action is dispatched", function () {
      var action = (0, _reactTunesPlayerReducer.playCurrentTune)();

      var actual = (0, _reactTunesPlayerReducer2.default)(stateBefore(), action);

      var expected = _extends({}, stateBefore(), {
        player: {
          isPlaying: true
        }
      });

      expect(actual).toEqual(expected);
    });
  });

  describe("pause current tune", function () {
    it("should return state with isPlaying set to false when pauseCurrentTune action is dispatched", function () {
      var _stateBefore = _extends({}, stateBefore(), {
        player: {
          isPlaying: true
        }
      });

      var action = (0, _reactTunesPlayerReducer.pauseCurrentTune)();

      var actual = (0, _reactTunesPlayerReducer2.default)(_stateBefore, action);

      var expected = _extends({}, stateBefore());

      expect(actual).toEqual(expected);
    });
  });

  describe("set next tune", function () {
    it("should return state with current set to next tune when setNextTune action is dispatched", function () {
      var _stateBefore = _extends({}, stateBefore(), {
        tunes: tunes(),
        current: tunes()[0]
      });

      var action = (0, _reactTunesPlayerReducer.setNextTune)();

      var actual = (0, _reactTunesPlayerReducer2.default)(_stateBefore, action);

      var expected = _extends({}, _stateBefore, {
        current: tunes()[1]
      });

      expect(actual).toEqual(expected);
    });

    describe("when last tune", function () {
      it("should return state with current set to the first tune when setNextTune action is dispatched", function () {
        var _stateBefore = _extends({}, stateBefore(), {
          tunes: tunes(),
          current: tunes()[4]
        });

        var action = (0, _reactTunesPlayerReducer.setNextTune)();

        var actual = (0, _reactTunesPlayerReducer2.default)(_stateBefore, action);

        var expected = _extends({}, _stateBefore, {
          current: tunes()[0]
        });

        expect(actual).toEqual(expected);
      });
    });
  });

  describe("set previous tune", function () {
    it("should return state with current set to previous tune when setPreviousTune action is dispatched", function () {
      var _stateBefore = _extends({}, stateBefore(), {
        tunes: tunes(),
        current: tunes()[3]
      });

      var action = (0, _reactTunesPlayerReducer.setPreviousTune)();

      var actual = (0, _reactTunesPlayerReducer2.default)(_stateBefore, action);

      var expected = _extends({}, _stateBefore, {
        current: tunes()[2]
      });

      expect(actual).toEqual(expected);
    });

    describe("when first tune", function () {
      it("should return state with current set to the last tune when setPreviousTune action is dispatched", function () {
        var _stateBefore = _extends({}, stateBefore(), {
          tunes: tunes(),
          current: tunes()[0]
        });

        var action = (0, _reactTunesPlayerReducer.setPreviousTune)();

        var actual = (0, _reactTunesPlayerReducer2.default)(_stateBefore, action);

        var expected = _extends({}, _stateBefore, {
          current: tunes()[4]
        });

        expect(actual).toEqual(expected);
      });
    });
  });
});