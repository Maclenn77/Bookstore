import './books.css';
import { useDispatch } from 'react-redux';
import { removeBook, Book } from '../redux/books/books';

const dispatch = useDispatch();

const removeBookFromStore = () => {
  dispatch(removeBook(Book));
};

const Books = () => (
  <div className="Lesson-Panel">
    <div className="book-info">
      <span className="School-of">Action</span>
      <h2 className="Title">The Hunger Games</h2>
      <span className="author">Suzanne-Collins</span>
      <div className="options">
        <span className="actions">Comments</span>
        <span className="actions" onClick={removeBookFromStore}>Remove</span>
        <span className="actions">Edit</span>
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

export default Books;
