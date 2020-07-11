import React from 'react';
import { render } from '@testing-library/react';

import BookPage from './bookpage';

describe(' Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookPage />);
    expect(baseElement).toBeTruthy();
  });
});
