import React from 'react';
import { render } from '@testing-library/react';
import ReactTunesPlayer from '.';

describe('React Tunes Player - Render Tests', () => {
  test('should render new player by default', () => {
    const { container } = render(<ReactTunesPlayer tunes={[]} />);
    expect(container).toMatchSnapshot();
  });

  test('should render old player by setting oldPlayer prop', () => {
    const { container } = render(
      <ReactTunesPlayer tunes={[]} oldPlayer={true} />,
    );
    expect(container).toMatchSnapshot();
  });
});
