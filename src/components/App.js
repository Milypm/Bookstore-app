import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from '../containers/Navbar';
import '../styles/app.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <BooksList />
      <BooksForm />
    </div>
  );
}
export default App;
