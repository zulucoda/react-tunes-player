"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("./assets/sass/react-tunes-player.css");

var _warning_ = require("./assets/images/warning_48.png");

var _warning_2 = _interopRequireDefault(_warning_);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright mfbproject.co.za - muzi@mfbproject.co.za
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright zulucoda - mfbproject
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ReactTunesPlayerView = (function(_Component) {
  _inherits(ReactTunesPlayerView, _Component);

  function ReactTunesPlayerView() {
    _classCallCheck(this, ReactTunesPlayerView);

    return _possibleConstructorReturn(
      this,
      (ReactTunesPlayerView.__proto__ ||
        Object.getPrototypeOf(ReactTunesPlayerView))
        .apply(this, arguments)
    );
  }

  _createClass(ReactTunesPlayerView, [
    {
      key: "componentWillMount",
      value: function componentWillMount() {
        var tunes = this.props.tunes || [];
        this.props.setTunes(tunes);
        if (tunes.length > 0) {
          this.props.setCurrentTune(tunes[0]);
        }
      }
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var tunes = this.props.tunes || [];
        if (tunes.length > 0) {
          var audio = this.tunesPlayer;
          audio.addEventListener("play", function() {
            _this2.props.playCurrentTune();
          });

          audio.addEventListener("pause", function() {
            _this2.props.pauseCurrentTune();
          });
        }
      }
    },
    {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(props) {
        var tunes = this.props.tunes || [];
        if (tunes.length > 0) {
          if (props._player.isPlaying) {
            this.tunesPlayer.play();
          } else {
            this.tunesPlayer.pause();
          }
        }
      }
    },
    {
      key: "render",
      value: function render() {
        var _this3 = this;

        var tunes = this.props.tunes || [];
        return _react2.default.createElement(
          "div",
          { className: "react-tunes-player g-z-index-header m-visible" },
          _react2.default.createElement(
            "div",
            { className: "react-tunes-player__inner" },
            _react2.default.createElement(
              "div",
              {
                className: "react-tunes-player__wrapper l-container l-fullwidth"
              },
              tunes.length > 0
                ? _react2.default.createElement(
                    "div",
                    { id: "mainwrap" },
                    _react2.default.createElement(
                      "div",
                      { id: "currentAlbumPlaying" },
                      _react2.default.createElement("img", {
                        src: this.props._current.album,
                        alt: this.props._current.name,
                        title: this.props._current.name
                      })
                    ),
                    _react2.default.createElement(
                      "div",
                      { id: "nowPlay" },
                      _react2.default.createElement(
                        "span",
                        null,
                        this.props._current.name
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { id: "tracks" },
                      _react2.default.createElement(
                        "a",
                        {
                          id: "btnPrev",
                          onClick: function onClick() {
                            return _this3.props.setPreviousTune();
                          }
                        },
                        "\xAB"
                      ),
                      _react2.default.createElement(
                        "a",
                        {
                          id: "btnNext",
                          onClick: function onClick() {
                            return _this3.props.setNextTune();
                          }
                        },
                        "\xBB"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { id: "audiowrap" },
                      _react2.default.createElement(
                        "div",
                        { id: "audio0" },
                        _react2.default.createElement(
                          "audio",
                          {
                            preload: true,
                            ref: function ref(_ref) {
                              _this3.tunesPlayer = _ref;
                            },
                            controls: "controls",
                            src: this.props._current.tune
                          },
                          "Your browser does not support HTML5 Audio!"
                        )
                      )
                    )
                  )
                : _react2.default.createElement(
                    "div",
                    { className: "warning-wrapper" },
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      _react2.default.createElement("img", {
                        src: _warning_2.default,
                        alt: "Warning!",
                        title: "Warning! No tunes loaded in player"
                      })
                    ),
                    " ",
                    _react2.default.createElement(
                      "span",
                      null,
                      "Warning! No tunes loaded in player."
                    )
                  )
            )
          )
        );
      }
    }
  ]);

  return ReactTunesPlayerView;
})(_react.Component);

ReactTunesPlayerView.propTypes = {
  tunes: _propTypes2.default.array.isRequired
};

exports.default = ReactTunesPlayerView;
