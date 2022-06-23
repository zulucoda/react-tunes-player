import React from 'react';
import { render } from '@testing-library/react';
import TuneError from '../../../components/old-v5-player/tune-error';

describe('Tune Error - Unit Test', () => {
  test('render Warning! Error while loading tune', () => {
    const currentTune = {
      tune: 'https://react-tunes-player.mfbproject.co.za/assets/audio/the_lego_tune_error.ogg',
      name: 'The lego tune',
      album:
        'https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg',
    };
    const { container } = render(<TuneError currentTune={currentTune} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
