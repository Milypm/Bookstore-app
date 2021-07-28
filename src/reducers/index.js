import { combineReducers } from 'redux';
import bookReducer from './books';
import categoryFilter from './filter';

const reducersCombine = combineReducers({
  books: bookReducer,
  filter: categoryFilter,
});
console.log('reducersCombine', reducersCombine);
export default reducersCombine;
