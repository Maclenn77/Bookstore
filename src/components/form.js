import React, { useState } from 'react';
import './form.css';
import { useDispatch } from 'react-redux';
import { addBook, bookId } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const titleChange = (e) => { setTitle(e.target.value); };
  const authorChange = (e) => { setAuthor(e.target.value); };

  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    const Book = {
      id: bookId(),
      title,
      author,
    };
    dispatch(addBook(Book));
  };
  return (
    <form className="add-form">
      <h2 className="add-Title">ADD NEW BOOK</h2>
      <div className="input-area">
        <input type="text" value={title} onChange={titleChange} placeholder="Book title" />
        <input type="text" value={author} onChange={authorChange} placeholder="Author" />
        <button type="submit" onClick={submitBookToStore}><span className="ADD-BOOK">ADD BOOK</span></button>
      </div>
    </form>
  );
};

export default Form;
