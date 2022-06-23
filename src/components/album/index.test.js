import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Album from '.';

describe('Components - Album - Render Test', () => {
  test('should render album cover and title', () => {
    render(
      <Album
        cover="https://react-tunes-player.mfbproject.co.za/assets/images/dune.jpg"
        title="The Lego Tune"
      />,
    );
    expect(screen.getByText('The Lego Tune')).toBeInTheDocument();
    expect(screen.getByAltText('The Lego Tune')).toBeInTheDocument();
  });
});
