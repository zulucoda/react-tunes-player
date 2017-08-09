"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _reactTunesPlayerView = require("../react-tunes-player-view");

var _reactTunesPlayerView2 = _interopRequireDefault(_reactTunesPlayerView);

var _jsdom = require("jsdom");

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jsdomSimulant = require("jsdom-simulant");

var _jsdomSimulant2 = _interopRequireDefault(_jsdomSimulant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/08/05.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
var document = new _jsdom.JSDOM("").window.document;

global.document = document;
global.window = document.defaultView;

describe("React Tunes Player View - Unit Test", function () {
  var wrapper = void 0,
      tunes = void 0;
  var mockFunc = jest.fn();
  var playCurrentTuneMockFunc = jest.fn();
  var pauseCurrentTuneMockFunc = jest.fn();

  describe("when not rendered with tunes", function () {
    beforeEach(function () {
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_reactTunesPlayerView2.default, { setTunes: mockFunc }));
    });

    it("should render React Tune Player View with warning message displayed", function () {
      expect(wrapper.contains("Warning! No tunes loaded in player.")).toBe(true);
    });

    describe("componentDidMount", function () {
      it("should NOT add event listener when tunes props is supplied", function () {
        spyOn(_reactTunesPlayerView2.default.prototype, "componentDidMount").and.callThrough();

        wrapper = (0, _enzyme.mount)(_react2.default.createElement(_reactTunesPlayerView2.default, { setTunes: mockFunc }));

        expect(_reactTunesPlayerView2.default.prototype.componentDidMount).toHaveBeenCalledTimes(1);
        expect(wrapper.find(".warning-wrapper").length).toEqual(1);
      });
    });

    describe("componentWillReceiveProps", function () {
      it("should NOT call playCurrentTune when isPlaying is true", function () {
        wrapper = (0, _enzyme.mount)(_react2.default.createElement(_reactTunesPlayerView2.default, {
          setTunes: mockFunc,
          playCurrentTune: playCurrentTuneMockFunc,
          pauseCurrentTune: pauseCurrentTuneMockFunc
        }));

        wrapper.instance().componentWillReceiveProps({ _player: { isPlaying: true } });
        expect(playCurrentTuneMockFunc).toHaveBeenCalledTimes(0);
      });

      it("should NOT call pauseCurrentTuneMockFunc when isPlaying is false", function () {
        wrapper = (0, _enzyme.mount)(_react2.default.createElement(_reactTunesPlayerView2.default, {
          setTunes: mockFunc,
          playCurrentTune: playCurrentTuneMockFunc,
          pauseCurrentTune: pauseCurrentTuneMockFunc
        }));

        wrapper.instance().componentWillReceiveProps({ _player: { isPlaying: false } });
        expect(pauseCurrentTuneMockFunc).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe("when rendered with tunes", function () {
    var setPreviousTuneMockFunc = jest.fn();
    var setNextTuneMockFunc = jest.fn();
    beforeEach(function () {
      tunes = [{
        tune: "/assets/audio/the_lego_tune.ogg",
        name: "The lego tune 1",
        album: "/assets/images/dune.jpg"
      }, {
        tune: "/assets/audio/the_lego_tune.ogg",
        name: "The lego tune 2",
        album: "/assets/images/dune.jpg"
      }, {
        tune: "/assets/audio/the_lego_tune.ogg",
        name: "The lego tune 3",
        album: "/assets/images/dune.jpg"
      }, {
        tune: "/assets/audio/the_lego_tune.ogg",
        name: "The lego tune 4",
        album: "/assets/images/dune.jpg"
      }, {
        tune: "/assets/audio/the_lego_tune.ogg",
        name: "The lego tune 5",
        album: "/assets/images/dune.jpg"
      }];
      wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_reactTunesPlayerView2.default, {
        setTunes: mockFunc,
        setCurrentTune: mockFunc,
        _current: tunes[0],
        tunes: tunes,
        setPreviousTune: setPreviousTuneMockFunc,
        setNextTune: setNextTuneMockFunc
      }));
    });

    it("should NOT render React Tune Player View with warning message displayed", function () {
      expect(wrapper.contains("Warning! No tunes loaded in player.")).toBe(false);
    });

    it("should render React Tune Player View with name of the current tune", function () {
      expect(wrapper.contains("The lego tune 1")).toBe(true);
    });

    it("should render React Tune Player View with picture of the current tune", function () {
      expect(wrapper.find("img").get(0).props.alt).toBe(tunes[0].name);
      expect(wrapper.find("img").get(0).props.src).toBe(tunes[0].album);
      expect(wrapper.find("img").get(0).props.title).toBe(tunes[0].name);
    });

    it("should call setPreviousTune action when onClick btnPrev", function () {
      wrapper.find("#btnPrev").simulate("click");
      expect(setPreviousTuneMockFunc).toHaveBeenCalled();
    });

    it("should call setPreviousTune action when onClick btnPrev", function () {
      wrapper.find("#btnNext").simulate("click");
      expect(setNextTuneMockFunc).toHaveBeenCalled();
    });

    describe("componentDidMount", function () {
      it("should add play and pause event listeners when tunes props is supplied", function () {
        _reactDom2.default.render(_react2.default.createElement(_reactTunesPlayerView2.default, {
          setTunes: mockFunc,
          setCurrentTune: mockFunc,
          _current: tunes[0],
          tunes: tunes,
          setPreviousTune: setPreviousTuneMockFunc,
          setNextTune: setNextTuneMockFunc,
          playCurrentTune: playCurrentTuneMockFunc,
          pauseCurrentTune: pauseCurrentTuneMockFunc
        }), document.body);

        expect(playCurrentTuneMockFunc).toHaveBeenCalledTimes(0);
        expect(pauseCurrentTuneMockFunc).toHaveBeenCalledTimes(0);
        expect(setNextTuneMockFunc).toHaveBeenCalledTimes(1);
        expect(playCurrentTuneMockFunc).toHaveBeenCalledTimes(0);

        _jsdomSimulant2.default.fire(document.body.querySelector("audio"), "play");
        expect(playCurrentTuneMockFunc).toHaveBeenCalledTimes(1);

        _jsdomSimulant2.default.fire(document.body.querySelector("audio"), "pause");
        expect(pauseCurrentTuneMockFunc).toHaveBeenCalledTimes(1);

        _jsdomSimulant2.default.fire(document.body.querySelector("audio"), "ended");
        expect(setNextTuneMockFunc).toHaveBeenCalledTimes(2);
        expect(playCurrentTuneMockFunc).toHaveBeenCalledTimes(2);
      });
    });

    describe("componentWillReceiveProps", function () {
      it("should call playCurrentTune when isPlaying is true", function () {
        wrapper = (0, _enzyme.mount)(_react2.default.createElement(_reactTunesPlayerView2.default, {
          setTunes: mockFunc,
          setCurrentTune: mockFunc,
          _current: tunes[0],
          tunes: tunes,
          setPreviousTune: setPreviousTuneMockFunc,
          setNextTune: setNextTuneMockFunc,
          playCurrentTune: playCurrentTuneMockFunc,
          pauseCurrentTune: pauseCurrentTuneMockFunc
        }));

        wrapper.instance().componentWillReceiveProps({ _player: { isPlaying: true } });
        expect(playCurrentTuneMockFunc).toHaveBeenCalledTimes(2);
      });

      it("should call pauseCurrentTuneMockFunc when isPlaying is false", function () {
        wrapper = (0, _enzyme.mount)(_react2.default.createElement(_reactTunesPlayerView2.default, {
          setTunes: mockFunc,
          setCurrentTune: mockFunc,
          _current: tunes[0],
          tunes: tunes,
          setPreviousTune: setPreviousTuneMockFunc,
          setNextTune: setNextTuneMockFunc,
          playCurrentTune: playCurrentTuneMockFunc,
          pauseCurrentTune: pauseCurrentTuneMockFunc
        }));

        wrapper.instance().componentWillReceiveProps({ _player: { isPlaying: false } });
        expect(pauseCurrentTuneMockFunc).toHaveBeenCalledTimes(1);
      });
    });
  });
});