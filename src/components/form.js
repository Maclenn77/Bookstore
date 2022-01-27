import './form.css';

const Form = () => (
  <form className="add-form">
    <h2 className="add-Title">ADD NEW BOOK</h2>
    <div className="input-area">
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Category" />
      <button type="submit"><span className="ADD-BOOK">ADD BOOK</span></button>
    </div>
  </form>
);

export default Form;
