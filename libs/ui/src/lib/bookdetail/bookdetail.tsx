import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBook } from '@proximie-challenge/apis';
import { Bookcard } from '../bookcard/bookcard';
import { Link } from 'react-router-dom';
import './bookdetail.css';

/* eslint-disable-next-line */

export const Bookdetail = () => {
  //take the parameter from the url
  const { volumeId } = useParams();
  const [book, setBook] = useState<Object>(null);

  useEffect(() => {
    //fetch the book using the parameter volumeId and fetchBook from apis
    fetchBook(volumeId).then((book) => {
      setBook(book);
    });
  }, []);
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <Link to="/">
          <button className="btn mt-2 mb-2 btn-success">Back</button>{' '}
        </Link>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        {/* if there is a book, execute the code after && */}
        {book && (
          <>
          {/* if there are authors, show them*/}
            {book['volumeInfo']['authors'] && (
              <div>
                {/* using map to return the authors to show them*/}
                <strong>{`Authors : ${book['volumeInfo']['authors'].map(
                  (author) => ' ' + author
                )}`}</strong>
              </div>
            )}
            {/* if there is a published date, show it*/}
            {book['volumeInfo']['publishedDate'] && (
              <div>
                <strong>{`Published Date : ${book['volumeInfo']['publishedDate']}`}</strong>
              </div>
            )}
            {/* if there is a page count, show it*/}
            {book['volumeInfo']['pageCount'] && (
              <div>
                <strong>{`Page Count : ${book['volumeInfo']['pageCount']}`}</strong>
              </div>
            )}
            <div>
              <Bookcard book={book} />
            </div>
            {/* if there is a description, show it*/}
            {book['volumeInfo']['description'] && (
              <div>
                <strong>{`Description : ${book['volumeInfo']['description']}`}</strong>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Bookdetail;
