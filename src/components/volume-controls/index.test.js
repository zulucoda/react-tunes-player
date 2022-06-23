import React from 'react';
import VolumeControls from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LOW_VOLUME } from '../../utils/constants';

describe('Components - Volume Controls - Render Test', () => {
  let volumeMuteMock;
  let volume0Mock;
  let volume1Mock;
  let volume2Mock;
  beforeEach(() => {
    volumeMuteMock = jest.fn();
    volume0Mock = jest.fn();
    volume1Mock = jest.fn();
    volume2Mock = jest.fn();
  });

  test('should render player controls', () => {
    const { container } = render(
      <VolumeControls
        volumeMute={volumeMuteMock}
        volumeMedium={volume1Mock}
        volumeHigh={volume2Mock}
        volumeLow={volume0Mock}
        volume={LOW_VOLUME}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
