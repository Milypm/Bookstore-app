import React, { useState } from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const [category, setCategory] = useState(categories[0]);
  const [title, setTitle] = useState('');
  return (
    <form>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="categories">Choose a Category:</label>
      <select id="categories" name="categories" value={category} onChange={(e) => setCategory(e.target.value)}>
        {
          categories.map((category) => (
            <option key={category} value={category.toLowerCase()}>{category}</option>
          ))
        }
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default BooksForm;
