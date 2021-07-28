// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const CategoryFilter = () => {
  const filterCategories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <form>
      <select id="filterCategories" name="filterCategories">
        {
          filterCategories.map((filterCategory) => (
            <option key={filterCategory} value={filterCategory.toLowerCase()}>
              {filterCategory}
            </option>
          ))
        }
      </select>
    </form>
  );
};
export default CategoryFilter;
