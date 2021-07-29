import { uuid } from 'uuidv4';
import types from './types';

export const initialState = {
  filter: 'all',
  books: [
    {
      title: 'Learn React',
      category: 'learning',
      id: uuid(),
    },
    {
      title: 'Learn Redux',
      category: 'learning',
      id: uuid(),
    },
    {
      title: 'World War I',
      category: 'history',
      id: uuid(),
    },
    {
      title: 'The Shining',
      category: 'horror',
      id: uuid(),
    },
    {
      title: 'The Little Mermaid',
      category: 'kids',
      id: uuid(),
    },
  ],
};

export const createBook = (book) => ({ type: types.ADD_BOOK, payload: book });

export const removeBook = (book) => ({ type: types.REMOVE_BOOK, payload: book.id });

export const changeFilter = (value) => ({ type: types.CHANGE_FILTER, payload: value });
