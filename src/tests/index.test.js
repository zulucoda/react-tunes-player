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
    });

    test('renders player with 1st tune loaded', () => {
      const { container } = render(<ReactTunesPlayer tunes={tunes} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('render next tune onNextTune click', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      fireEvent.click(getByTestId('next-tune'));

      expect(getByTestId('current-tune-name')).toContainHTML('Funky Suspense');
    });

    test('render previous tune onPrevTune click', () => {
      const { getByTestId } = render(<ReactTunesPlayer tunes={tunes} />);
      fireEvent.click(getByTestId('next-tune'));

      expect(getByTestId('current-tune-name')).toContainHTML('Funky Suspense');
    });
  });

  describe('when there are NO tunes', () => {
    test('render Warning! No tunes loaded in player.', () => {
      const { container } = render(<ReactTunesPlayer />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
