import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducersCombine from './reducers/index';
import reportWebVitals from './reportWebVitals';
import { initialState } from './actions';

const store = createStore(reducersCombine, initialState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
