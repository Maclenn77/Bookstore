import { createStore, combineReducers, applyMiddleware } from 'react-redux';
import logger from 'redux-logger';
import booksReducer from './redux/books/books.js';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
