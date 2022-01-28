import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Form from './form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <Form />
    </div>
  );
};

export default Books;
