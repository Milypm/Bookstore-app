import React from 'react';

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
  return (
    <form>
      <input placeholder="Title" />
      <label htmlFor="categories">Choose a Category:</label>
      <select id="cars" name="cars">
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
