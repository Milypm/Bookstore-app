const type = {
  ADD_BOOK = "ADD_BOOK",
  REMOVE_BOOK = "REMOVE_BOOK"
}

export const addBook = (book) => {
  return { type: ADD_BOOK, payload: book }
};
