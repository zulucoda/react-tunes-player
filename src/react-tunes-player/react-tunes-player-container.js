/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/07/25.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentTune, setTunes, togglePlayOrPause } from './react-tunes-player-reducer';
import ReactTunesPlayerView from './react-tunes-player-view';

export const mapStateToProps = ({ reactTunesPlayerReducer }) => ({
  _tunes: reactTunesPlayerReducer.tunes,
  _current: reactTunesPlayerReducer.current,
  _player: reactTunesPlayerReducer.player
});

export const mapDispatchToProps= (dispatch) => bindActionCreators({ setCurrentTune, setTunes, togglePlayOrPause }, dispatch);

const ReactTunesPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(ReactTunesPlayerView);
export default ReactTunesPlayerContainer;