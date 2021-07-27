import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';

const Book = (props) => {
  const { title, category, id } = props;
  const handleRemoveBook = () => {
    const book = {
      title,
      category,
      id,
    };
    props.removeBook(book);
  };
  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td>{id}</td>
      <td>
        <button type="button" onClick={handleRemoveBook}>Remove Book</button>
      </td>
    </tr>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeBook: PropTypes.func,
};

Book.defaultProps = {
  removeBook: () => {},
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
});

export default connect(null, mapDispatchToProps)(Book);
