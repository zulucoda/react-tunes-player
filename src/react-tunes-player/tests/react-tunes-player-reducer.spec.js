/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/08/04.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import reactTunePlayerReducer, { setTunes, setCurrentTune, togglePlayOrPause } from '../react-tunes-player-reducer';

describe('React Tune Player Reducer - Unit Test', () => {
  function stateBefore () {
    return {
      tunes: [],
      current: {
        tune: '',
        name: '',
        album: ''
      },
      player: {
        isPlaying: false
      }
    };
  }

  function tunes () {
    return [
      {
        tune: 'some tune 1',
        name: 'some name 1',
        album: 'some album 1'
      },{
        tune: 'some tune 2',
        name: 'some name 2',
        album: 'some album 2'
      },{
        tune: 'some tune 3',
        name: 'some name 3',
        album: 'some album 3'
      },{
        tune: 'some tune 4',
        name: 'some name 4',
        album: 'some album 4'
      },{
        tune: 'some tune 5',
        name: 'some name 5',
        album: 'some album 5'
      }
    ];
  }

  it('should return initial state', function () {
      const action = {};

      const actual = reactTunePlayerReducer(undefined, action);

      const expected = {
        ...stateBefore()
      };

      expect(actual).toEqual(expected);
  });

  it('should return current state when unknown action is dispatched', function () {
      const action = {
        type: 'UNKNOWN_ACTION'
      };

      const _stateBefore = {
        ...stateBefore(),
        current: {
          tune: 'some tune',
          name: 'some name',
          album: 'some album'
        },
      }

      const actual = reactTunePlayerReducer(_stateBefore, action);

      const expected = {
        ..._stateBefore
      };

      expect(actual).toEqual(expected);
  });

  describe('set tunes', () => {
    it('should return state with tunes set when setTunes action is dispatched', function () {
        const action = setTunes(tunes());

        const actual = reactTunePlayerReducer(stateBefore(), action);

        const expected = {
          ...stateBefore(),
          tunes: [
            ...tunes()
          ]
        };

        expect(actual).toEqual(expected);
    });
  });

  describe('set current tune', () => {
    it('should return state with current tune set when set current tune action is dispatched', function () {
        const action = setCurrentTune(tunes()[3]);

        const actual = reactTunePlayerReducer(stateBefore(), action);

        const expected = {
          ...stateBefore(),
          current: tunes()[3]
        };

        expect(actual).toEqual(expected);
    });
  });

  describe('toggle play or pause', () => {
    it('should return state player isPlaying is set when togglePlayOrPause action is dispatched', function () {
        const action = togglePlayOrPause();

        const actual = reactTunePlayerReducer(stateBefore(), action);

        const expected = {
          ...stateBefore(),
          player: {
            isPlaying: true
          }
        };

        expect(actual).toEqual(expected);
    });
  });
});