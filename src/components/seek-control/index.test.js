import React from 'react';
import { render, screen } from '@testing-library/react';
import SeekControl from '.';
import '@testing-library/jest-dom/extend-expect';

describe('Components - Seek Controls - Render Test', () => {
  test('should render seek controls', () => {
    const { container } = render(<SeekControl />);
    expect(container).toMatchSnapshot();
  });
});
