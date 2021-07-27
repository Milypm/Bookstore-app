import React, { useState } from 'react';

const BooksForm = () => {
  const [
    action,
    biography,
    history,
    horror,
    kids,
    learning,
    scifi,
  ] = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const [category, setCategory] = useState(action);
  const [title, setTitle] = useState('');
  return (
    <form>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="categories">Choose a Category:</label>
      <select id="categories" name="categories" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="action">{action}</option>
        <option value="biography">{biography}</option>
        <option value="history">{history}</option>
        <option value="horror">{horror}</option>
        <option value="kids">{kids}</option>
        <option value="learning">{learning}</option>
        <option value="sci-fi">{scifi}</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default BooksForm;
