/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React, { Component } from 'react';
import './assets/sass/react-tunes-player.css'

class ReactTunesPlayerView extends Component {
  componentWillMount(){
    const tunes = this.props.tunes || [];
    this.props.setTunes(tunes);
    if (tunes.length > 0) { this.props.setCurrentTune(tunes[0]);}
  }

  componentDidMount() {
    const audio = this.tunesPlayer;

    audio.addEventListener('play', () => {
      this.props.playCurrentTune();
    });

    audio.addEventListener('pause', () => {
      this.props.pauseCurrentTune();
    });
  }

  componentWillReceiveProps(props){
    if (props._player.isPlaying) {
      this.tunesPlayer.play();
    }else{
      this.tunesPlayer.pause();
    }
  }

  render () {
    return (
        <div className="react-tunes-player g-z-index-header m-visible">
          <div className="react-tunes-player__inner">
            <div className="react-tunes-player__wrapper l-container l-fullwidth">
              <div id="mainwrap">
                <div id="currentAlbumPlaying">
                  <img src={this.props._current.album} alt={this.props._current.name} title={this.props._current.name}/>
                </div>
                <div id="nowPlay">
                  <span>{this.props._current.name}</span>
                </div>
                <div id="tracks">
                  <a id="btnPrev" onClick={() => {this.tunesPlayer.play()}}>&laquo;</a>
                  <a id="btnNext">&raquo;</a>
                </div>
                <div id="audiowrap">
                  <div id="audio0">
                    <audio preload ref={(ref) => { this.tunesPlayer = ref; }} controls="controls" src={this.props._current.tune}>Your browser does not support HTML5 Audio!</audio>
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