import { GET_POINTS_DATA, LOADING_POINTS_DATA, RESET_POINTS_DATA } from '../../redux/action';

const defaultState = { data: [], loading: false };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOADING_POINTS_DATA:
      return { ...state, loading: true };
    case GET_POINTS_DATA:
      return { ...state, data: [...payload], loading: false };
    case RESET_POINTS_DATA:
      return { ...state, data: [] };
    default:
      return { ...state };
  }
};
