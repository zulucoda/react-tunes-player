/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/08/05.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import ReactTunesPlayerContainer from "../react-tunes-player-container";
import {
  setTunes,
  setCurrentTune,
  playCurrentTune,
  pauseCurrentTune,
  setNextTune,
  setPreviousTune
} from "../react-tunes-player-reducer";

describe("React Tunes Player Container and View - Unit Test", () => {
  const initialState = {
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

  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(function() {
    store = mockStore(initialState);
    wrapper = shallow(<ReactTunesPlayerContainer store={store} />);
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
    expect(wrapper.node.props.setNextTune()).toEqual(setNextTune());
  });

  it("should mapDispatchToProps setPreviousTune", function() {
    expect(wrapper.node.props.setPreviousTune()).toEqual(setPreviousTune());
  });

  it("should mapDispatchToProps setTunes", function() {
    expect(wrapper.node.props.setTunes()).toEqual(setTunes());
  });

  it("should mapDispatchToProps setCurrentTune", function() {
    expect(wrapper.node.props.setCurrentTune()).toEqual(setCurrentTune());
  });

  it("should mapDispatchToProps playCurrentTune", function() {
    expect(wrapper.node.props.playCurrentTune()).toEqual(playCurrentTune());
  });

  it("should mapDispatchToProps pauseCurrentTune", function() {
    expect(wrapper.node.props.pauseCurrentTune()).toEqual(pauseCurrentTune());
  });
});
