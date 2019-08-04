/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import warningImg from "./assets/images/warning_48.png";
import styled from 'styled-components';
import { HIGH_VOLUME, LOW_VOLUME, MEDIUM_VOLUME, MUTE_VOLUME } from './constants';
import device from './devices';


const ReactTunePlayerContainer = styled.div`
      position: fixed;
      bottom: -5px;
      visibility: hidden;
      width: 100%;
      -webkit-perspective: 900;
      perspective: 900;
      -webkit-perspective-origin: 80% 100%;
      perspective-origin: 80% 100%;
  `;

const TunesInner = styled.div`
    box-shadow:0 0 6px 1px rgba(0,0,0,.25);
    height: 75px;
    visibility: visible;
    transition: -webkit-transform 200ms ease-out;
    transition: transform 200ms ease-out;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
     
     background-color: #f2f2f2;
     border-top: 1px solid #cecece;
      
    -webkit-transform: translateY(0);
    transform: translateY(0);
  `;

const TunesWrapper = styled.div`
    padding-bottom: 10px;
    visibility: visible;
    position: relative;
    height: 100%;
  `;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row; 
    height: 100%;
    width: 100%;
  `;

const CurrentAlbumPlaying = styled.div`
    margin: 0 1rem 0 0;
    img {
      height: 75px;
      @media ${device.mobileS} {
        display: none;
      }
      
      @media ${device.mobileL} {
        display: inline;
      }
    }
  `;

const NowPlaying = styled.div`
    margin: 2rem 1rem 0 0;
    @media ${device.mobileS} {
      margin: 2rem 0 0 0;
      font-size: 0.7rem;
      flex-grow:2;
    }
    
    @media ${device.mobileL} {
        display: inline;
        flex-grow:1;
      }
      
   @media ${device.tablet} {
        display: inline;
        font-size: 1rem;
        margin: 2rem 1rem 0 0;
   }
  `;

const Controls = styled.div`
    margin: 1.2rem 0 0 0;
    
    @media ${device.mobileS} {
      margin: 1.8rem 0 0 0;
    }
    
    @media ${device.laptop} {
    margin: 1.2rem 0 0 0;
   }
  `;

const Btn = styled.a`
    background-color: transparent;
    color: #231F20;
    font-size: 2em;
    padding: 0 1rem 0 1rem;
    
    @media ${device.mobileS} {
      font-size: 0.7rem;
      padding: 1rem 0.5rem 0 0.5rem;
    }
    
    @media ${device.tablet} {
        font-size: 1.3em;
        padding: 0 1rem 0 1rem;
    }
    
    @media ${device.laptop} {
          font-size: 2em;
    }
    
    > svg {
     width: 1rem;
     height: 1rem;
     cursor: pointer;
     fill: #594C4F;
     
     @media ${device.mobileS} {
      width: 0.7rem;
      height: 0.7rem;
    }
    
    @media ${device.tablet} {
        width: 0.8rem;
        height: 0.8rem;
    }
    
    @media ${device.laptop} {
          width: 1rem;
         height: 1rem;
    }
     
     &:hover {
      fill: #E93733;
     }
    }
  `;

const PreviousTune = styled(Btn)``;

const NextTune = styled(Btn)``;

const PlayTune = styled(Btn)`
> svg {
  fill: ${props => props.isPlaying ? '#E93733' : '#594C4F'};
  }
`;

const PauseTune = styled(Btn)`
> svg {
  fill: ${props => !props.isPlaying ? '#E93733' : '#594C4F'};
  }
`;

const SeekTune = styled.div`
    margin: 2rem 0 0 0;
    flex-grow:2;
    
    @media ${device.mobileS} {
        display: none;
    }
    
    @media ${device.mobileL} {
        display: inline;
    }
    
    > progress {
      width: 100%;
      
      /* Turns off styling - not usually needed, but good to know. */
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
 
      color: #E93733; /* IE 10 */
      
	    /* Needs to be in here for Safari polyfill so background images work as expected. */
	    background-size: auto;
         
      &::-moz-progress-bar { 
        background-color: #E93733;  
      }
      
      &::-webkit-progress-value {
        background-color: #E93733;  
      }
    }
  `;

const SeekTime = styled.div`
    margin: 2rem 0 0 1rem;
    @media ${device.mobileS} {
      margin: 2rem 1rem 0 1rem;
      font-size: 0.7rem;
    }
    
    @media ${device.tablet} {
        font-size: 1rem;
    }
`;

const Volume = styled(Controls)`
    @media ${device.mobileS} {
        display: none;
    }
    
    @media ${device.laptop} {
        display: inline;
   }
`;

const HighVolume = styled(Btn)`
 > svg {
  fill: ${props => props.volume === HIGH_VOLUME ? '#E93733' : '#594C4F'};
  }
`;

const MediumVolume = styled(Btn)`
 > svg {
  fill: ${props => props.volume === MEDIUM_VOLUME ? '#E93733' : '#594C4F'};
  }
`;

const LowVolume = styled(Btn)`
 > svg {
  fill: ${props => props.volume === LOW_VOLUME ? '#E93733' : '#594C4F'};
  }
`;

const MuteVolume = styled(Btn)`
 > svg {
  fill: ${props => props.volume === MUTE_VOLUME ? '#E93733' : '#594C4F'};
  }
`;

const AudioWrapper = styled.div`
    margin:0 auto;
    display: none;
  `;


class ReactTunesPlayerView extends Component {

  constructor(props){
    super(props);
    this.drag = false;
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.tuneSeek = this.tuneSeek.bind(this);
    this.endTuneSeekDrag = this.endTuneSeekDrag.bind(this);
    this.starTuneSeekDrag = this.starTuneSeekDrag.bind(this);
    this.tuneSeekDragging = this.tuneSeekDragging.bind(this);
    this.tuneSeekTimeUpdate = this.tuneSeekTimeUpdate.bind(this);
  }

  onPlay () {
    this.props.playCurrentTune();
  }

  onPause () {
    this.props.pauseCurrentTune();
  }

  onEnded () {
    this.props.pauseCurrentTune();
    this.props.setNextTune();
    this.props.playCurrentTune();
  }


  tuneSeek (e) {
    let x = e.pageX - e.target.offsetLeft,
      clickedValue = x * e.target.max / e.target.offsetWidth;

    this.props.setSeekTimeTune(clickedValue);
    this.tunesPlayer.currentTime = clickedValue;
  };

  endTuneSeekDrag (e)  {this.drag = false;};
  starTuneSeekDrag (e)  {this.drag = true;};
  tuneSeekDragging (e)  {this.drag = this.drag ? this.tuneSeek(e) : 'clicked'};

  tuneSeekTimeUpdate () {
    this.props.setTuneDuration(Number.isNaN(this.tunesPlayer.duration) ? 0 : this.tunesPlayer.duration);
    this.props.setSeekTimeTune(this.tunesPlayer.currentTime);
  };

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
      audio.addEventListener("play", this.onPlay);
      audio.addEventListener("pause", this.onPause);
      audio.addEventListener("ended", this.onEnded);

      const progress = this.progressSeek;
      progress.addEventListener('click', this.tuneSeek);
      progress.addEventListener('mousedown', this.endTuneSeekDrag);
      progress.addEventListener('mousemove', this.starTuneSeekDrag);
      progress.addEventListener('mouseup', this.tuneSeekDragging);

      audio.addEventListener("timeupdate", this.tuneSeekTimeUpdate);

      this.tuneSeekTimeUpdate();
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

  componentWillUnmount () {
    const audio = this.tunesPlayer;
    audio.removeEventListener("play", this.onPlay);
    audio.removeEventListener("pause", this.onPause);
    audio.removeEventListener("ended", this.onEnded);

    const progress = this.progressSeek;
    progress.removeEventListener('click', this.tuneSeek);
    progress.removeEventListener('mousedown', this.endTuneSeekDrag);
    progress.removeEventListener('mousemove', this.starTuneSeekDrag);
    progress.removeEventListener('mouseup', this.tuneSeekDragging);
  }

  render() {
    const { _current, _player, playCurrentTune, pauseCurrentTune, setNextTune, setPreviousTune, setVolume } = this.props;
    return (
      <ReactTunePlayerContainer>
        <TunesInner>
          <TunesWrapper>
            <MainWrapper>
              <CurrentAlbumPlaying>
                <img alt={_current.name} src={_current.album}/>
              </CurrentAlbumPlaying>
              <NowPlaying><span>{_current.name}</span></NowPlaying>
              <Controls>
                <PreviousTune title="Previous tune" onClick={(e) => {e.preventDefault(); setPreviousTune()}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M170.7 256L448 448V64L170.7 256zM64 64h64v384H64z"/></svg></PreviousTune>
                <PlayTune isPlaying={_player.isPlaying} title="Play tune" onClick={(e) => { e.preventDefault(); playCurrentTune(); }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 52v408l320-204L96 52z"/></svg></PlayTune>
                <PauseTune isPlaying={_player.isPlaying} title="Pause tune" onClick={(e) => {e.preventDefault(); pauseCurrentTune(); }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z"/></svg></PauseTune>
                <NextTune title="Next tune" onClick={(e) => {e.preventDefault(); setNextTune(); }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 64v384l277.3-192L64 64zM384 64h64v384h-64z"/></svg></NextTune>
              </Controls>
              <SeekTune>
                <progress ref={ref => {
                  this.progressSeek = ref;
                }} max={_player.duration} value={_player.time}>
                </progress>
              </SeekTune>
              <SeekTime>
                {`${(_player.time > 0 ? (_player.time / 60).toFixed(2) : 0)} / ${ (_player.duration > 0) ? (_player.duration / 60).toFixed(2) : 0}`}
              </SeekTime>
              <Volume>
                <HighVolume volume={_player.volume} onClick={() => {this.tunesPlayer.volume = HIGH_VOLUME; setVolume(HIGH_VOLUME); }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z"/></svg></HighVolume>
                <MediumVolume volume={_player.volume} onClick={() => {this.tunesPlayer.volume = MEDIUM_VOLUME; setVolume(MEDIUM_VOLUME);}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256z"/></svg></MediumVolume>
                <LowVolume volume={_player.volume} onClick={() => {this.tunesPlayer.volume = LOW_VOLUME; setVolume(LOW_VOLUME);}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64z"/></svg></LowVolume>
                <MuteVolume volume={_player.volume} onClick={() => {this.tunesPlayer.volume = MUTE_VOLUME; setVolume(MUTE_VOLUME);}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M405.5 256c0 22.717-4.883 44.362-13.603 63.855l31.88 31.88C439.283 323.33 448 290.653 448 256c0-93.256-64-172.254-149-192v44.978C361 127.632 405.5 186.882 405.5 256zM256 80.458l-51.021 52.48L256 183.957zM420.842 396.885L91.116 67.157l-24 24 90.499 90.413-8.28 10.43H64v128h85.334L256 431.543V280l94.915 94.686C335.795 387.443 318 397.213 299 403.022V448c31-7.172 58.996-22.163 82.315-42.809l39.61 39.693 24-24.043-24.002-24.039-.081.083z"/><path d="M352.188 256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801 50.801A100.596 100.596 0 0 0 352.188 256z"/></svg></MuteVolume>
              </Volume>
              <AudioWrapper>
                <audio controls
                       ref={ref => {
                         this.tunesPlayer = ref;
                       }}
                       src={_current.tune}
                >
                </audio>
              </AudioWrapper>
            </MainWrapper>
          </TunesWrapper>
        </TunesInner>
      </ReactTunePlayerContainer>
    );
  }
}

ReactTunesPlayerView.defaultProps = {
  autoPlay: true
};

ReactTunesPlayerView.propTypes = {
  tunes: PropTypes.array.isRequired,
  autoPlay: PropTypes.bool
};

export default ReactTunesPlayerView;
