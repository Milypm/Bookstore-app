import { combineReducers } from 'redux';
import bookReducer from './books';
import categoryFilter from './filter';

const reducersCombine = combineReducers({
  filter: categoryFilter,
  books: bookReducer,
});
export default reducersCombine;
