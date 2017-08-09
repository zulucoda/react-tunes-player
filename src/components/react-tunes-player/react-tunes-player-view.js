/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./assets/sass/react-tunes-player.css";
import warningImg from "./assets/images/warning_48.png";

class ReactTunesPlayerView extends Component {
  componentWillMount() {
    const tunes = this.props.tunes || [];
    this.props.setTunes(tunes);
    if (tunes.length > 0) {
      this.props.setCurrentTune(tunes[0]);
    }
  }

  componentDidMount() {
    const tunes = this.props.tunes || [];
    if (tunes.length > 0) {
      const audio = this.tunesPlayer;
      audio.addEventListener("play", () => {
        this.props.playCurrentTune();
      });

      audio.addEventListener("pause", () => {
        this.props.pauseCurrentTune();
      });

      audio.addEventListener("ended", () => {
        this.props.setNextTune();
      });
    }
  }

  componentWillReceiveProps(props) {
    const tunes = this.props.tunes || [];
    if (tunes.length > 0) {
      if (props._player.isPlaying) {
        this.tunesPlayer.play();
      } else {
        this.tunesPlayer.pause();
      }
    }
  }

  render() {
    const tunes = this.props.tunes || [];
    return (
      <div className="react-tunes-player g-z-index-header m-visible">
        <div className="react-tunes-player__inner">
          <div className="react-tunes-player__wrapper l-container l-fullwidth">
            {tunes.length > 0
              ? <div id="mainwrap">
                  <div id="currentAlbumPlaying">
                    <img
                      src={this.props._current.album}
                      alt={this.props._current.name}
                      title={this.props._current.name}
                    />
                  </div>
                  <div id="nowPlay">
                    <span>
                      {this.props._current.name}
                    </span>
                  </div>
                  <div id="tracks">
                    <a
                      id="btnPrev"
                      onClick={() => this.props.setPreviousTune()}
                    >
                      &laquo;
                    </a>
                    <a id="btnNext" onClick={() => this.props.setNextTune()}>
                      &raquo;
                    </a>
                  </div>
                  <div id="audiowrap">
                    <div id="audio0">
                      <audio
                        preload
                        ref={ref => {
                          this.tunesPlayer = ref;
                        }}
                        controls="controls"
                        src={this.props._current.tune}
                      >
                        Your browser does not support HTML5 Audio!
                      </audio>
                    </div>
                  </div>
                </div>
              : <div className="warning-wrapper">
                  {" "}<span>
                    <img
                      src={warningImg}
                      alt="Warning!"
                      title="Warning! No tunes loaded in player"
                    />
                  </span>{" "}
                  <span>Warning! No tunes loaded in player.</span>
                </div>}
          </div>
        </div>
      </div>
    );
  }
}

ReactTunesPlayerView.propTypes = {
  tunes: PropTypes.array.isRequired
};

export default ReactTunesPlayerView;
