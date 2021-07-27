import types from '../actions/types';

const bookReducer = (state = {}, action) => {
  let newState = state;
  switch (action.type) {
    case types.ADD_BOOK:
      newState = { ...state, books: [...state.books, action.payload] };
      return newState;
    case types.REMOVE_BOOK:
      newState = {
        ...newState,
        books: newState.books.filter((book) => book.id !== action.payload),
      };
      return newState;
    default:
      return newState;
  }
};
export default bookReducer;
