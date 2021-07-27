import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import bookReducer from './reducers/books';
import reportWebVitals from './reportWebVitals';

const initialState = {
  books: [
    {
      title: 'Learn React',
      category: 'Learning',
      id: Math.floor(Math.random() * 1000),
    },
    {
      title: 'Learn Redux',
      category: 'Learning',
      id: Math.floor(Math.random() * 1000),
    },
  ],
};
const store = createStore(bookReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
