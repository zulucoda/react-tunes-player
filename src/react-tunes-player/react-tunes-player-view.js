/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React, { Component } from 'react';
import './assets/sass/react-tunes-player.css'

class ReactTunesPlayerView extends Component {
  render () {
    return (
        <div className="react-tunes-player g-z-index-header m-visible">
          <div className="react-tunes-player__inner">
            <div className="react-tunes-player__wrapper l-container l-fullwidth">
              <div id="mainwrap">
                <div id="currentAlbumPlaying">
                  <img src="" alt=""/>
                </div>
                <div id="nowPlay">
                  <span></span>
                </div>
                <div id="tracks">
                  <a id="btnPrev">&laquo;</a>
                  <a id="btnNext">&raquo;</a>
                </div>
                <div id="audiowrap">
                  <div id="audio0">
                    <audio preload id="audio1" controls="controls" src="">Your browser does not support HTML5 Audio!</audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ReactTunesPlayerView;