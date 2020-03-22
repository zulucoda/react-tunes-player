/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/08/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import { render, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import ReactTunesPlayer from '../index';
import 'jest-dom/extend-expect';

describe('React Tunes Player - Unit Test', () => {
  afterEach(cleanup);

  describe('when there are tunes', () => {
    let tunes;

    function loadData(element) {
      fireEvent.loadedData(element, new window.Event('loadeddata'));
    }

    beforeEach(() => {
      tunes = [
        {
          tune:
            'https://react-tunes-player.mfbproject.co.za/assets/audio/the_lego_tune.ogg',
          name: 'The lego tune',
          album:
            'https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg',
        },
        {
          tune:
            'https://react-tunes-player.mfbproject.co.za/assets/audio/bensound-funkysuspense.mp3',
          name: 'Funky Suspense',
          album:
            'https://react-tunes-player.mfbproject.co.za/assets/images/funkysuspense.jpg',
        },
      ];
      window.HTMLMediaElement.prototype.load = jest.fn();
      window.HTMLMediaElement.prototype.play = jest.fn();
      window.HTMLMediaElement.prototype.pause = jest.fn();
    });

    test('renders player with 1st tune loaded', () => {
      const { container, getByTestId } = render(
        <ReactTunesPlayer tunes={tunes} />,
      );
      loadData(getByTestId('current-tune-audio'));

      expect(container.firstChild).toMatchSnapshot();
    });

    test('render next tune onNextTune click', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      loadData(getByTestId('current-tune-audio'));

      fireEvent.click(getByTestId('next-tune'));

      expect(getByTestId('current-tune-name')).toContainHTML('Funky Suspense');
      expect(getByTestId('current-tune-album-art')).toContainHTML(
        'https://react-tunes-player.mfbproject.co.za/assets/images/funkysuspense.jpg',
      );
    });

    test('render previous tune onPrevTune click', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      loadData(getByTestId('current-tune-audio'));

      fireEvent.click(getByTestId('previous-tune'));

      expect(getByTestId('current-tune-name')).toContainHTML('Funky Suspense');
      expect(getByTestId('current-tune-album-art')).toContainHTML(
        'https://react-tunes-player.mfbproject.co.za/assets/images/funkysuspense.jpg',
      );
    });

    test('render previous tune onPrevTune click 2x', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      loadData(getByTestId('current-tune-audio'));

      expect(getByTestId('current-tune-name')).toContainHTML('The lego tune');
      expect(getByTestId('current-tune-album-art')).toContainHTML(
        'https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg',
      );

      fireEvent.click(getByTestId('previous-tune'));

      loadData(getByTestId('current-tune-audio'));
      expect(getByTestId('current-tune-name')).toContainHTML('Funky Suspense');
      expect(getByTestId('current-tune-album-art')).toContainHTML(
        'https://react-tunes-player.mfbproject.co.za/assets/images/funkysuspense.jpg',
      );

      fireEvent.click(getByTestId('previous-tune'));

      loadData(getByTestId('current-tune-audio'));
      expect(getByTestId('current-tune-name')).toContainHTML('The lego tune');
      expect(getByTestId('current-tune-album-art')).toContainHTML(
        'https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg',
      );
    });

    test('render previous tune onNextTune click 2x', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      loadData(getByTestId('current-tune-audio'));

      expect(getByTestId('current-tune-name')).toContainHTML('The lego tune');
      expect(getByTestId('current-tune-album-art')).toContainHTML(
        'https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg',
      );

      fireEvent.click(getByTestId('next-tune'));

      loadData(getByTestId('current-tune-audio'));
      expect(getByTestId('current-tune-name')).toContainHTML('Funky Suspense');
      expect(getByTestId('current-tune-album-art')).toContainHTML(
        'https://react-tunes-player.mfbproject.co.za/assets/images/funkysuspense.jpg',
      );

      fireEvent.click(getByTestId('next-tune'));

      loadData(getByTestId('current-tune-audio'));
      expect(getByTestId('current-tune-name')).toContainHTML('The lego tune');
      expect(getByTestId('current-tune-album-art')).toContainHTML(
        'https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg',
      );
    });

    test('renders play button button with red colour on onPlay click', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      loadData(getByTestId('current-tune-audio'));

      fireEvent.click(getByTestId('play-tune'));
      expect(getByTestId('play-tune')).toMatchSnapshot();
      expect(getByTestId('pause-tune')).toMatchSnapshot();
    });

    test('renders pause button button with red colour on onPause click', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      loadData(getByTestId('current-tune-audio'));

      fireEvent.click(getByTestId('pause-tune'));
      expect(getByTestId('pause-tune')).toMatchSnapshot();
      expect(getByTestId('play-tune')).toMatchSnapshot();
    });

    test('renders HighVolume with red colour on HighVolume button click', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      loadData(getByTestId('current-tune-audio'));

      fireEvent.click(getByTestId('high-volume'));
      expect(getByTestId('high-volume')).toMatchSnapshot();
    });

    test('renders MediumVolume with red colour on MediumVolume button click', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      loadData(getByTestId('current-tune-audio'));

      fireEvent.click(getByTestId('medium-volume'));
      expect(getByTestId('medium-volume')).toMatchSnapshot();
    });

    test('renders LowVolume with red colour on LowVolume button click', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      loadData(getByTestId('current-tune-audio'));

      fireEvent.click(getByTestId('low-volume'));
      expect(getByTestId('low-volume')).toMatchSnapshot();
    });

    test('renders MuteVolume with red colour on MuteVolume button click', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      loadData(getByTestId('current-tune-audio'));

      fireEvent.click(getByTestId('mute-volume'));
      expect(getByTestId('mute-volume')).toMatchSnapshot();
    });
  });

  describe('when there are NO tunes', () => {
    test('render Warning! No tunes loaded in player.', () => {
      const { container } = render(<ReactTunesPlayer tunes={[]} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
