import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './books.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div className="Lesson-Panel">
      <div className="book-info">
        <span className="School-of">Action</span>
        <h2 className="Title">{book.title}</h2>
        <span className="author">{book.author}</span>
        <div className="options">
          <span className="actions">Comments</span>
          <button type="button" className="actions" onClick={removeBookFromStore}>Remove</button>
          <span type="button" className="actions">Edit</span>
        </div>
      </div>
      <div className="percent-graphic">
        <div className="Oval-2" />
        <div className="percent">
          <span className="-Percent-Complete">64%</span>
          <span className="Completed">Completed</span>
        </div>
      </div>
      <div className="chapter">
        <span className="Current-Chapter">CURRENT CHAPTER</span>
        <span className="Current-Lesson">Chapter 17</span>
        <div className="Rectangle-2">
          <span className="Update-progress">UPDATE PROGRESS</span>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
