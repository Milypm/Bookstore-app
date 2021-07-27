import React from 'react';
import PropTypes from 'prop-types';
// import Redux from 'react-redux';

const Book = (props) => {
  const { title, category, id } = props;
  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td>{id}</td>
    </tr>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
