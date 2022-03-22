import { GET_CARS_DATA, LOADING_CARS_DATA } from '../action';

const defaultState = { data: [], loading: false };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOADING_CARS_DATA:
      return { ...state, loading: true };
    case GET_CARS_DATA:
      return {
        ...state,
        data: [...payload],
        loading: false,
      };
    default:
      return { ...state };
  }
};
