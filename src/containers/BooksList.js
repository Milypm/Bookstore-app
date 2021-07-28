import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

const BooksList = (props) => {
  const { filter, books } = props;
  const [booksList, setBooksList] = useState([]);
  const handleRemoveBook = (book) => {
    props.removeBook(book);
  };
  const handleFilterChange = (e) => {
    props.changeFilter(e.target.value);
  };
  useEffect(() => {
    console.log('HERRRE ==>', books, filter.filter);
    setBooksList(filter.filter === 'All' ? books : books.filter(((book) => book.category === filter)));
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              Category
              <CategoryFilter handleFilterChange={handleFilterChange} filterValue={filter} />
            </th>
            <th>Book ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            booksList.map((book) => (
              <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  filter: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
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
