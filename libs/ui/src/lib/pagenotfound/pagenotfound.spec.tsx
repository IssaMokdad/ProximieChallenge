import React from 'react';
import { render } from '@testing-library/react';

import Pagenotfound from './pagenotfound';

describe(' Pagenotfound', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pagenotfound />);
    expect(baseElement).toBeTruthy();
  });
});
