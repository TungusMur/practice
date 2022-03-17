import { GET_CATEGORIES_DATA, LOADING_CATEGORIES_DATA } from '../../redux/action';

const defaultState = { data: [], loading: false };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOADING_CATEGORIES_DATA:
      return { ...state, loading: false };
    case GET_CATEGORIES_DATA:
      return { ...state, data: [...payload], loading: true };
    default:
      return { ...state };
  }
};
