import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import { createBook } from '../actions/index';
import '../styles/booksForm.css';

const BooksForm = (props) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const [category, setCategory] = useState(categories[0]);
  const [title, setTitle] = useState('');
  const handleChange = (e) => {
    if (e.nativeEvent.inputType === 'insertText' || e.nativeEvent.inputType === 'deleteContentBackward') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
      category,
      id: uuid(),
    };
    props.createBook(book);
    setTitle('');
    setCategory(categories[0]);
  };
  return (
    <div className="div-book-form">
      <h4 htmlFor="add-book">ADD NEW BOOK</h4>
      <form className="book-form">
        <input placeholder="Book title" value={title} onChange={handleChange} />
        <select className="form-select" id="categories" name="categories" value={category} onChange={handleChange}>
          <option value="" hidden>Category</option>
          {
            categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>{category}</option>
            ))
          }
        </select>
        <button type="button" onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

BooksForm.defaultProps = {
  createBook: () => {},
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
