/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/08/05.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from "react";
import { shallow, mount } from "enzyme";
import ReactTunesPlayerView from "../react-tunes-player-view";
import { JSDOM } from "jsdom";
import ReactDOM from "react-dom";
import simulant from "jsdom-simulant";

const { document } = new JSDOM("").window;
global.document = document;
global.window = document.defaultView;

describe("React Tunes Player View - Unit Test", () => {
  let wrapper, tunes;
  const mockFunc = jest.fn();
  const playCurrentTuneMockFunc = jest.fn();
  const pauseCurrentTuneMockFunc = jest.fn();

  describe("when not rendered with tunes", () => {
    beforeEach(function() {
      wrapper = shallow(<ReactTunesPlayerView setTunes={mockFunc} />);
    });

    it("should render React Tune Player View with warning message displayed", function() {
      expect(wrapper.contains("Warning! No tunes loaded in player.")).toBe(
        true
      );
    });

    describe("componentDidMount", () => {
      it("should NOT add event listener when tunes props is supplied", function() {
        spyOn(
          ReactTunesPlayerView.prototype,
          "componentDidMount"
        ).and.callThrough();

        wrapper = mount(<ReactTunesPlayerView setTunes={mockFunc} />);

        expect(
          ReactTunesPlayerView.prototype.componentDidMount
        ).toHaveBeenCalledTimes(1);
        expect(wrapper.find(".warning-wrapper").length).toEqual(1);
      });
    });

    describe("componentWillReceiveProps", () => {
      it("should NOT call playCurrentTune when isPlaying is true", function() {
        wrapper = mount(
          <ReactTunesPlayerView
            setTunes={mockFunc}
            playCurrentTune={playCurrentTuneMockFunc}
            pauseCurrentTune={pauseCurrentTuneMockFunc}
          />
        );

        wrapper
          .instance()
          .componentWillReceiveProps({ _player: { isPlaying: true } });
        expect(playCurrentTuneMockFunc).toHaveBeenCalledTimes(0);
      });

      it("should NOT call pauseCurrentTuneMockFunc when isPlaying is false", function() {
        wrapper = mount(
          <ReactTunesPlayerView
            setTunes={mockFunc}
            playCurrentTune={playCurrentTuneMockFunc}
            pauseCurrentTune={pauseCurrentTuneMockFunc}
          />
        );

        wrapper
          .instance()
          .componentWillReceiveProps({ _player: { isPlaying: false } });
        expect(pauseCurrentTuneMockFunc).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe("when rendered with tunes", () => {
    const setPreviousTuneMockFunc = jest.fn();
    const setNextTuneMockFunc = jest.fn();
    beforeEach(function() {
      tunes = [
        {
          tune: "/assets/audio/the_lego_tune.ogg",
          name: "The lego tune 1",
          album: "/assets/images/dune.jpg"
        },
        {
          tune: "/assets/audio/the_lego_tune.ogg",
          name: "The lego tune 2",
          album: "/assets/images/dune.jpg"
        },
        {
          tune: "/assets/audio/the_lego_tune.ogg",
          name: "The lego tune 3",
          album: "/assets/images/dune.jpg"
        },
        {
          tune: "/assets/audio/the_lego_tune.ogg",
          name: "The lego tune 4",
          album: "/assets/images/dune.jpg"
        },
        {
          tune: "/assets/audio/the_lego_tune.ogg",
          name: "The lego tune 5",
          album: "/assets/images/dune.jpg"
        }
      ];
      wrapper = shallow(
        <ReactTunesPlayerView
          setTunes={mockFunc}
          setCurrentTune={mockFunc}
          _current={tunes[0]}
          tunes={tunes}
          setPreviousTune={setPreviousTuneMockFunc}
          setNextTune={setNextTuneMockFunc}
        />
      );
    });

    it("should NOT render React Tune Player View with warning message displayed", function() {
      expect(wrapper.contains("Warning! No tunes loaded in player.")).toBe(
        false
      );
    });

    it("should render React Tune Player View with name of the current tune", function() {
      expect(wrapper.contains("The lego tune 1")).toBe(true);
    });

    it("should render React Tune Player View with picture of the current tune", function() {
      expect(wrapper.find("img").get(0).props.alt).toBe(tunes[0].name);
      expect(wrapper.find("img").get(0).props.src).toBe(tunes[0].album);
      expect(wrapper.find("img").get(0).props.title).toBe(tunes[0].name);
    });

    it("should call setPreviousTune action when onClick btnPrev", function() {
      wrapper.find("#btnPrev").simulate("click");
      expect(setPreviousTuneMockFunc).toHaveBeenCalled();
    });

    it("should call setPreviousTune action when onClick btnPrev", function() {
      wrapper.find("#btnNext").simulate("click");
      expect(setNextTuneMockFunc).toHaveBeenCalled();
    });

    describe("componentDidMount", () => {
      it("should add play and pause event listeners when tunes props is supplied", function() {
        ReactDOM.render(
          <ReactTunesPlayerView
            setTunes={mockFunc}
            setCurrentTune={mockFunc}
            _current={tunes[0]}
            tunes={tunes}
            setPreviousTune={setPreviousTuneMockFunc}
            setNextTune={setNextTuneMockFunc}
            playCurrentTune={playCurrentTuneMockFunc}
            pauseCurrentTune={pauseCurrentTuneMockFunc}
          />,
          document.body
        );

        expect(playCurrentTuneMockFunc).toHaveBeenCalledTimes(0);
        expect(pauseCurrentTuneMockFunc).toHaveBeenCalledTimes(0);
        expect(setNextTuneMockFunc).toHaveBeenCalledTimes(1);

        simulant.fire(document.body.querySelector("audio"), "play");
        expect(playCurrentTuneMockFunc).toHaveBeenCalledTimes(1);

        simulant.fire(document.body.querySelector("audio"), "pause");
        expect(pauseCurrentTuneMockFunc).toHaveBeenCalledTimes(1);

        simulant.fire(document.body.querySelector("audio"), "ended");
        expect(setNextTuneMockFunc).toHaveBeenCalledTimes(2);
      });
    });

    describe("componentWillReceiveProps", () => {
      it("should call playCurrentTune when isPlaying is true", function() {
        wrapper = mount(
          <ReactTunesPlayerView
            setTunes={mockFunc}
            setCurrentTune={mockFunc}
            _current={tunes[0]}
            tunes={tunes}
            setPreviousTune={setPreviousTuneMockFunc}
            setNextTune={setNextTuneMockFunc}
            playCurrentTune={playCurrentTuneMockFunc}
            pauseCurrentTune={pauseCurrentTuneMockFunc}
          />
        );

        wrapper
          .instance()
          .componentWillReceiveProps({ _player: { isPlaying: true } });
        expect(playCurrentTuneMockFunc).toHaveBeenCalledTimes(1);
      });

      it("should call pauseCurrentTuneMockFunc when isPlaying is false", function() {
        wrapper = mount(
          <ReactTunesPlayerView
            setTunes={mockFunc}
            setCurrentTune={mockFunc}
            _current={tunes[0]}
            tunes={tunes}
            setPreviousTune={setPreviousTuneMockFunc}
            setNextTune={setNextTuneMockFunc}
            playCurrentTune={playCurrentTuneMockFunc}
            pauseCurrentTune={pauseCurrentTuneMockFunc}
          />
        );

        wrapper
          .instance()
          .componentWillReceiveProps({ _player: { isPlaying: false } });
        expect(pauseCurrentTuneMockFunc).toHaveBeenCalledTimes(1);
      });
    });
  });
});
