import React from 'react';
// import Redux from 'react-redux';
// import ReactDOM from 'react-dom'
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

export default BooksList;
