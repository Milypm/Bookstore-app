import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import '../styles/booksList.css';

const BooksList = (props) => {
  const { filter, books } = props;
  const [booksList, setBooksList] = useState([]);
  const handleRemoveBook = (book) => {
    props.removeBook(book);
  };
  useEffect(() => {
    setBooksList(filter === 'all' ? books : books.filter(((book) => book.category === filter)));
  }, [books, filter]);
  return (
    <section className="books-section">
      {
        booksList.map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))
      }
    </section>
  );
};
BooksList.propTypes = {
  filter: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeBook: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});
const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
  changeFilter: (value) => {
    dispatch(changeFilter(value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
