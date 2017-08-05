/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  setTunes,
  setCurrentTune,
  playCurrentTune,
  pauseCurrentTune,
  setNextTune,
  setPreviousTune
} from "./react-tunes-player-reducer";
import ReactTunesPlayerView from "./react-tunes-player-view";

export const mapStateToProps = ({ reactTunesPlayerReducer }) => ({
  _tunes: reactTunesPlayerReducer.tunes,
  _current: reactTunesPlayerReducer.current,
  _player: reactTunesPlayerReducer.player
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setTunes,
      setCurrentTune,
      playCurrentTune,
      pauseCurrentTune,
      setNextTune,
      setPreviousTune
    },
    dispatch
  );

const ReactTunesPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(
  ReactTunesPlayerView
);
export default ReactTunesPlayerContainer;
