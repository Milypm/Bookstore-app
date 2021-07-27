import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = (props) => (
  <div>
    <table>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>Book ID</th>
      </tr>
      <tr>
        <Book value={props} />
      </tr>
    </table>
  </div>
);
const mapStateToProps = (state) => ({
  books: state.books,
});
const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
