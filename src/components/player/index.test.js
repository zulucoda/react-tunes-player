import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Player from '.';

describe('Component - Player - Render Tests', () => {
  test('should render player with no tunes error', () => {
    render(<Player tunes={[]} />);
    expect(
      screen.getByText('Warning! No tunes loaded in player.'),
    ).toBeInTheDocument();
  });
});
