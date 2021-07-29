import { uuid } from 'uuidv4';
import types from './types';

export const initialState = {
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

export const createBook = (book) => ({ type: types.ADD_BOOK, payload: book });

export const removeBook = (book) => ({ type: types.REMOVE_BOOK, payload: book.id });

export const changeFilter = (value) => ({ type: types.CHANGE_FILTER, payload: value });
