import { GET_CITIES_DATA, LOADING_CITIES_DATA } from '../../redux/action';

const defaultState = { data: [], loading: false };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOADING_CITIES_DATA:
      return { ...state, loading: false };
    case GET_CITIES_DATA:
      return { ...state, data: payload, loading: true };
    default:
      return { ...state };
  }
};
