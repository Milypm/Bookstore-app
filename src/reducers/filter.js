const CHANGE_FILTER = 'CHANGE_FILTER';

const categoryFilter = (state = {}, action) => {
  switch (action.type === CHANGE_FILTER) {
    case action.payload === 'Action':
      return { ...state, filter: action.payload };
    case action.payload === 'Biography':
      return { ...state, filter: action.payload };
    case action.payload === 'History':
      return { ...state, filter: action.payload };
    case action.payload === 'Horror':
      return { ...state, filter: action.payload };
    case action.payload === 'Kids':
      return { ...state, filter: action.payload };
    case action.payload === 'Learning':
      return { ...state, filter: action.payload };
    case action.payload === 'Sci-Fi':
      return { ...state, filter: action.payload };
    default:
      return { ...state, filter: 'All' };
  }
};
export default categoryFilter;
