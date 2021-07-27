import { combineReducers, createStore } from 'redux';
import bookReducer from './books';

const store = createStore(
  combineReducers({
    books: bookReducer,
  }),
);

export default store;
