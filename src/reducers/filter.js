import types from '../actions/types';

const categoryFilter = (state = 'All', action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return { ...state, filter: action.payload };
    default:
      return { ...state, filter: 'All' };
  }
};
export default categoryFilter;
