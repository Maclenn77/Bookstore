import React from 'react';
import './form.css';
import { useDispatch } from 'react-redux';
import { addBook, Book } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const submitBookToStore = () => {
    dispatch(addBook(Book));
  };
  return (
    <form className="add-form">
      <h2 className="add-Title">ADD NEW BOOK</h2>
      <div className="input-area">
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Category" />
        <button type="submit" onClick={submitBookToStore}><span className="ADD-BOOK">ADD BOOK</span></button>
      </div>
    </form>
  );
};

export default Form;
