/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/08/04.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import ReactTunesPlayerReducer, {
  setTunes,
  setCurrentTune,
  playCurrentTune,
  pauseCurrentTune,
  setNextTune,
  setPreviousTune
} from "../react-tunes-player-reducer";

describe("React Tune Player Reducer - Unit Test", () => {
  function stateBefore() {
    return {
      tunes: [],
      current: {
        tune: "",
        name: "",
        album: ""
      },
      player: {
        isPlaying: false
      }
    };
  }

  function tunes() {
    return [
      {
        tune: "some tune 1",
        name: "some name 1",
        album: "some album 1"
      },
      {
        tune: "some tune 2",
        name: "some name 2",
        album: "some album 2"
      },
      {
        tune: "some tune 3",
        name: "some name 3",
        album: "some album 3"
      },
      {
        tune: "some tune 4",
        name: "some name 4",
        album: "some album 4"
      },
      {
        tune: "some tune 5",
        name: "some name 5",
        album: "some album 5"
      }
    ];
  }

  it("should return initial state", function() {
    const action = {};

    const actual = ReactTunesPlayerReducer(undefined, action);

    const expected = {
      ...stateBefore()
    };

    expect(actual).toEqual(expected);
  });

  it("should return current state when unknown action is dispatched", function() {
    const action = {
      type: "UNKNOWN_ACTION"
    };

    const _stateBefore = {
      ...stateBefore(),
      current: {
        tune: "some tune",
        name: "some name",
        album: "some album"
      }
    };

    const actual = ReactTunesPlayerReducer(_stateBefore, action);

    const expected = {
      ..._stateBefore
    };

    expect(actual).toEqual(expected);
  });

  describe("set tunes", () => {
    it("should return state with tunes set when setTunes action is dispatched", function() {
      const action = setTunes(tunes());

      const actual = ReactTunesPlayerReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        tunes: [...tunes()]
      };

      expect(actual).toEqual(expected);
    });
  });

  describe("set current tune", () => {
    it("should return state with current tune set when set current tune action is dispatched", function() {
      const action = setCurrentTune(tunes()[3]);

      const actual = ReactTunesPlayerReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        current: tunes()[3]
      };

      expect(actual).toEqual(expected);
    });
  });

  describe("play current tune", () => {
    it("should return state with isPlaying set to true when playCurrentTune action is dispatched", function() {
      const action = playCurrentTune();

      const actual = ReactTunesPlayerReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        player: {
          isPlaying: true
        }
      };

      expect(actual).toEqual(expected);
    });
  });

  describe("pause current tune", () => {
    it("should return state with isPlaying set to false when pauseCurrentTune action is dispatched", function() {
      const _stateBefore = {
        ...stateBefore(),
        player: {
          isPlaying: true
        }
      };

      const action = pauseCurrentTune();

      const actual = ReactTunesPlayerReducer(_stateBefore, action);

      const expected = {
        ...stateBefore()
      };

      expect(actual).toEqual(expected);
    });
  });

  describe("set next tune", () => {
    it("should return state with current set to next tune when setNextTune action is dispatched", function() {
      const _stateBefore = {
        ...stateBefore(),
        tunes: tunes(),
        current: tunes()[0]
      };

      const action = setNextTune();

      const actual = ReactTunesPlayerReducer(_stateBefore, action);

      const expected = {
        ..._stateBefore,
        current: tunes()[1]
      };

      expect(actual).toEqual(expected);
    });

    describe("when last tune", () => {
      it("should return state with current set to the first tune when setNextTune action is dispatched", function() {
        const _stateBefore = {
          ...stateBefore(),
          tunes: tunes(),
          current: tunes()[4]
        };

        const action = setNextTune();

        const actual = ReactTunesPlayerReducer(_stateBefore, action);

        const expected = {
          ..._stateBefore,
          current: tunes()[0]
        };

        expect(actual).toEqual(expected);
      });
    });
  });

  describe("set previous tune", () => {
    it("should return state with current set to previous tune when setPreviousTune action is dispatched", function() {
      const _stateBefore = {
        ...stateBefore(),
        tunes: tunes(),
        current: tunes()[3]
      };

      const action = setPreviousTune();

      const actual = ReactTunesPlayerReducer(_stateBefore, action);

      const expected = {
        ..._stateBefore,
        current: tunes()[2]
      };

      expect(actual).toEqual(expected);
    });

    describe("when first tune", () => {
      it("should return state with current set to the last tune when setPreviousTune action is dispatched", function() {
        const _stateBefore = {
          ...stateBefore(),
          tunes: tunes(),
          current: tunes()[0]
        };

        const action = setPreviousTune();

        const actual = ReactTunesPlayerReducer(_stateBefore, action);

        const expected = {
          ..._stateBefore,
          current: tunes()[4]
        };

        expect(actual).toEqual(expected);
      });
    });
  });
});
