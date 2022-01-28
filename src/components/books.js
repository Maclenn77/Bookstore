import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
