import React, { useState } from 'react';
import Spinner from '../spinner/spinner';
import Bookcard from '../bookcard/bookcard';
import { Link } from 'react-router-dom';
import { fetchBooks } from '@proximie-challenge/apis';
import './bookpage.css';

export const BookPage = () => {
  const [searchInput, setSearchInput] = useState('');
  //this is to show the spinner when there is a search process
  const [searching, setSearching] = useState<boolean>(false);
  //this is to save the results of the google books api search
  const [searchResults, setSearchResults] = useState<Object[]>();
  //this method to handle the change of the search component (a controlled input)
  const handleSearchInputChange = (event: any) => {
    setSearchInput(event.target.value);
    //make a fetch request to google books api on input change
    //but if the change leads to a null value, empty the search results and
    //don't make a fetch request
    if (!event.target.value) {
      setSearchResults(null);
      setSearching(false);
    } else {
      getQueryResults();
    }
  };
  const getQueryResults = () => {
    //show the spinner while searching
    setSearching(true);
    //search the books
    if(searchInput!==''){
      fetchBooks(searchInput).then((response) => {
        //stop the spinner
        setSearching(false);
        //show the search results
        setSearchResults(response.items);
      });
    }

  };
  //below is the container of the bookpage, bootsrap is used to design elements
  //also created some css classes
  //responsive design using flexbox
  //also used flex to center the search input box
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-content-center">
        <div className="mt-4 form-group search-width">
          <label className="sr-only" htmlFor="search-book">
            Search books
          </label>
          <input
            placeholder="Search for a book"
            type="text"
            onChange={handleSearchInputChange}
            value={searchInput}
            className="form-control text-center border border-primary"
            id="search-book"
          />
        </div>
      </div>
      {searching && <Spinner />}
      {searchResults && (
        <div className="mt-4 p-3 d-flex flex-wrap justify-content-center align-items-center">
          {searchResults.map((book: Object, index: number) => (
          
              <div key={index} className="d-flex flex-wrap flex-column justify-content-center align-items-center">
              <Bookcard book={book} />
              <Link to={`/book/${book['id']}`}>
                <button className="btn btn-primary">More Info</button>
              </Link>
              </div>
           
          ))}
        </div>
      )}
    </div>
  );
};

export default BookPage;
