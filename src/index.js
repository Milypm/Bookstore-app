import React from 'react';
import { Provider } from 'react-redux';
import { uuid } from 'uuidv4';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducersCombine from './reducers/index';
import reportWebVitals from './reportWebVitals';

const initialState = {
  filter: 'All',
  books: [
    {
      title: 'Learn React',
      category: 'Learning',
      id: uuid(),
    },
    {
      title: 'Learn Redux',
      category: 'Learning',
      id: uuid(),
    },
  ],
};
const store = createStore(reducersCombine, initialState);
console.log(initialState.filter);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
