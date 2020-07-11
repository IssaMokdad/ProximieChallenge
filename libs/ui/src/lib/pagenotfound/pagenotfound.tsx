import React from 'react';

import './pagenotfound.css';

/* eslint-disable-next-line */
export interface PagenotfoundProps {}

export const Pagenotfound = (props: PagenotfoundProps) => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <h1><strong>Page not found!</strong></h1>
    </div>
  );
};

export default Pagenotfound;
