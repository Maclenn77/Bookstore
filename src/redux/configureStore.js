import { createStore, combineReducers, applyMiddleware } from "react-redux";
import logger from 'redux-logger';
import booksReducer from './redux/books';

const reducer = combineReducers({
    booksReducer
    // additional reducers could be added here
});

const store = createStore(
    reducer,
    applyMiddleware(logger)
);

export default store;