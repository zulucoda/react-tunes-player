import React from 'react';
import PlayerControls from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Components - Player Controls - Render Test', () => {
  let playMock;
  let skipBackMock;
  let skipForwardMock;
  let pauseMock;
  beforeEach(() => {
    playMock = jest.fn();
    skipBackMock = jest.fn();
    skipForwardMock = jest.fn();
    pauseMock = jest.fn();
  });

  test('should render player controls', () => {
    render(
      <PlayerControls
        play={playMock}
        skipForward={skipForwardMock}
        pause={pauseMock}
        skipBack={skipBackMock}
        isPlaying={false}
      />,
    );
    expect(screen.getByRole('skip-back')).toBeInTheDocument();
    expect(screen.getByRole('skip-forward')).toBeInTheDocument();
    expect(screen.getByRole('play-circle')).toBeInTheDocument();
    expect(screen.getByRole('pause-circle')).toBeInTheDocument();
  });

  test('should be able to click on all play controls', () => {
    render(
      <PlayerControls
        play={playMock}
        skipForward={skipForwardMock}
        pause={pauseMock}
        skipBack={skipBackMock}
        isPlaying={false}
      />,
    );

    fireEvent.click(screen.getByRole('skip-back'));
    expect(skipBackMock).toHaveBeenCalled();

    fireEvent.click(screen.getByRole('skip-forward'));
    expect(skipForwardMock).toHaveBeenCalled();

    fireEvent.click(screen.getByRole('play-circle'));
    expect(playMock).toHaveBeenCalled();

    fireEvent.click(screen.getByRole('pause-circle'));
    expect(pauseMock).toHaveBeenCalled();
  });
});
