import React from 'react';
import { render } from '@testing-library/react';

import Bookdetail from './bookdetail';

describe(' Bookdetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bookdetail />);
    expect(baseElement).toBeTruthy();
  });
});
