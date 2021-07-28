import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import { createBook } from '../actions/index';

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
    <form>
      <input placeholder="Title" value={title} onChange={handleChange} />
      <label htmlFor="categories">Choose a Category:</label>
      <select id="categories" name="categories" value={category} onChange={handleChange}>
        {
          categories.map((category) => (
            <option key={category} value={category.toLowerCase()}>{category}</option>
          ))
        }
      </select>
      <button type="button" onClick={handleSubmit}>Save</button>
    </form>
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
