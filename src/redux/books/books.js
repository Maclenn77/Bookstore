import { postBook, getBooks, deleteBook } from './apiHandler';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const initialState = [];

export const bookId = () => Date.now().toString();

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBook = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const addBookApi = (book) => async (dispatch) => {
  await postBook(book);
  dispatch(addBook(book));
};

export const removeBookApi = (id) => async (dispatch) => {
  await deleteBook(id);
  dispatch(removeBook(id));
};

export const getBookApi = () => async (dispatch) => {
  const books = await getBooks();
  const booklist = [];
  Object.keys(books).forEach((id) => {
    booklist.push({ item_id: id, title: books[id][0].title, category: books[id][0].category });
  });
  dispatch(getBook(booklist));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
