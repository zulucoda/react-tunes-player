import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../../components/spinner';

describe('Spinner - Unit Test', () => {
  test('render Spinner when showSpinner is true', () => {
    const { container } = render(<Spinner showSpinner={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('render null when showSpinner is false', () => {
    const { container } = render(<Spinner showSpinner={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
