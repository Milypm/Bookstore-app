import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
// import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';
import '../styles/booksList.css';

const BooksList = (props) => {
  const { filter, books } = props;
  const [booksList, setBooksList] = useState([]);
  const handleRemoveBook = (book) => {
    props.removeBook(book);
  };
  // const handleFilterChange = (e) => {
  //   props.changeFilter(e.target.value);
  // };
  useEffect(() => {
    setBooksList(filter === 'all' ? books : books.filter(((book) => book.category === filter)));
  }, [books, filter]);
  return (
    <section className="books-section">
      {/* &apos;&apos;
      <tr>
        <th>Title</th>
        <th>
          Category
          <CategoryFilter handleFilterChange={handleFilterChange} filterValue={filter} />
        </th>
        <th>Book ID</th>
        <th>Action</th>
      </tr> */}
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
  // changeFilter: PropTypes.func.isRequired,
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
