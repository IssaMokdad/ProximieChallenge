import React from 'react';
import defaultbookimage from 'apps/proximie-challenge/src/assets/public/images/defaultbookimage.jpg';
import './bookcard.css';

/* eslint-disable-next-line */
export interface BookcardProps {
  book:Object
}

export const Bookcard = (props: BookcardProps) => {
  const {book} = props
  return (
    <div
    className="d-flex m-3 flex-wrap border border-primary flex-column align-items-center book-card-size"
  >
    <div className="p-2 title-height">
      <strong>{book['volumeInfo']['title']}</strong>
    </div>
    <div>
      <img
        width="250"
        height="250"
        // if the book doesn't have a thumbnail, set the default book image
        src={
          book['volumeInfo']['imageLinks'] !== undefined
            ? book['volumeInfo']['imageLinks']['thumbnail']
            : defaultbookimage
        }
        className="rounded"
        alt={book['volumeInfo']['title']}
      />
    </div>
  </div>
  );
};

export default Bookcard;
