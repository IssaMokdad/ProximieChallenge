import React from 'react';
import { render } from '@testing-library/react';

import Bookcard from './bookcard';

describe(' Bookcard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bookcard />);
    expect(baseElement).toBeTruthy();
  });
});
