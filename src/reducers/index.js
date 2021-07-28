import { combineReducers } from 'redux';
import bookReducer from './books';
import categoryFilter from './filter';

export default combineReducers({
  books: bookReducer,
  filter: categoryFilter,
});
