import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookApi } from '../redux/books/books';
import Book from './book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookApi());
  }, []);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default Books;
