import { GET_CATEGORIES_DATA, LOADING_CATEGORIES_DATA } from '../../redux/action';

const defaultState = { data: [], loading: false };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOADING_CATEGORIES_DATA:
      return { ...state, loading: true };
    case GET_CATEGORIES_DATA:
      return { ...state, data: [...payload], loading: false };
    default:
      return { ...state };
  }
};
