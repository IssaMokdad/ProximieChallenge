const GOOGLE_BOOKS_BY_QUERY: String =
  'https://www.googleapis.com/books/v1/volumes?q=';
const GOOGLE_BOOK_RETRIEVE: String =
  'https://www.googleapis.com/books/v1/volumes';

//This peace of code is used in every fetch request, so this function is made to
//return it in order to for the code to be clean
const checkResponse = (response:any) : (Promise<any> | Error) =>{
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
export const fetchBooks = (searchInput: any): Promise<any> =>
  fetch(
    `${GOOGLE_BOOKS_BY_QUERY} ${searchInput} &maxResults=40&projection=full`
  ).then(response => {
    return checkResponse(response)
  });

  export const fetchBook = (volumeId: String): Promise<any> =>
  fetch(
    `${GOOGLE_BOOK_RETRIEVE}/${volumeId}`
  ).then(response => {
    return checkResponse(response)
  });
