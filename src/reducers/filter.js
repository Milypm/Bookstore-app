import { initialState } from '../actions';
import types from '../actions/types';

const categoryFilter = (state = initialState.filter, action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};
export default categoryFilter;
