import React from 'react';
import PropTypes from 'prop-types';

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
  id: PropTypes.string.isRequired,
};

export default Book;
