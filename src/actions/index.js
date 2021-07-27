import types from './types';

export const createBook = (book) => {
  return { type: types.ADD_BOOK, payload: book }
};

export const removeBook = (book) => {
  return { type: types.REMOVE_BOOK, payload: book.id }
};
