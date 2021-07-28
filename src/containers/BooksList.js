import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = (props) => {
  const { books } = props;
  const handleRemoveBook = (book) => {
    props.removeBook(book);
  };
  return (
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Book ID</th>
          <th>Action</th>
        </tr>
        {
          books.map((book) => (
            <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
          ))
        }
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});
const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
