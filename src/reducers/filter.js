const categoryFilter = (state = {}, action) => {
  switch(action.type === CHANGE_FILTER) {
    case action.payload === 'Action':
      return { ...state, books: [...state.books.filter = action.payload] };
    case action.payload === 'Biography':
      return { ...state, books: [...state.books.filter = action.payload] };
    case action.payload === 'History':
      return { ...state, books: [...state.books.filter = action.payload] };
    case action.payload === 'Horror':
      return { ...state, books: [...state.books.filter = action.payload] };
    case action.payload === 'Kids':
      return { ...state, books: [...state.books.filter = action.payload] };
    case action.payload === 'Learning':
      return { ...state, books: [...state.books.filter = action.payload] };
    case action.payload === 'Sci-Fi':
      return { ...state, books: [...state.books.filter = action.payload] };
    default:
      return { ...state, books: [...state.books.filter = 'All'] };
  }
};
export default categoryFilter;
