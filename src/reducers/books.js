import { initialState } from '../actions';
import types from '../actions/types';

const bookReducer = (state = initialState.books, action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return [...state, action.payload];
    case types.REMOVE_BOOK:
      console.log(action.payload);
      return [...state].filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};
export default bookReducer;
