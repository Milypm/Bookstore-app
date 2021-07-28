const categoryFilter = (state = {}, action) => {
  switch (action.payload) {
    case 'Action':
      return { ...state, filter: action.payload };
    case 'Biography':
      return { ...state, filter: action.payload };
    case 'History':
      return { ...state, filter: action.payload };
    case 'Horror':
      return { ...state, filter: action.payload };
    case 'Kids':
      return { ...state, filter: action.payload };
    case 'Learning':
      return { ...state, filter: action.payload };
    case 'Sci-Fi':
      return { ...state, filter: action.payload };
    default:
      return { ...state, filter: 'All' };
  }
};
export default categoryFilter;
