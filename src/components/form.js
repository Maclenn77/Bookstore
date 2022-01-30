import React, { useState } from 'react';
import './form.css';
import { useDispatch } from 'react-redux';
import { addBookApi, bookId } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const titleChange = (e) => { setTitle(e.target.value); };
  const categoryChange = (e) => { setCategory(e.target.value); };

  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    const Book = {
      item_id: bookId(),
      title,
      category,
    };
    dispatch(addBookApi(Book));
  };
  return (
    <form className="add-form">
      <h2 className="add-Title">ADD NEW BOOK</h2>
      <div className="input-area">
        <input type="text" value={title} onChange={titleChange} placeholder="Book title" />
        <input type="text" value={category} onChange={categoryChange} placeholder="Category" />
        <button type="submit" onClick={submitBookToStore}><span className="ADD-BOOK">ADD BOOK</span></button>
      </div>
    </form>
  );
};

export default Form;
