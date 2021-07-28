import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = (props) => {
  const { books } = props;
  const handleRemoveBook = (book) => {
    removeBook(book);
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
            <Book key={book.id} book={book} handleRemove={handleRemoveBook} />
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
const mapDispatchToProps = () => ({
  removeBook: () => {
    dispatch(removeBook());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
