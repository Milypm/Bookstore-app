import types from './types';

export const createBook = (book) => ({ type: types.ADD_BOOK, payload: book });

export const removeBook = (book) => ({ type: types.REMOVE_BOOK, payload: book.id });
