import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = (props) => {
  const { books } = props;
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
            <Book key={book.id} category={book.category} title={book.title} id={book.id} />
          ))
        }
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});
const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
