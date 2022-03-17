import { GET_CARS_DATA, LOADING_CARS_DATA } from '../action';

const defaultState = { data: [], loading: false };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOADING_CARS_DATA:
      return { ...state, loading: false };
    case GET_CARS_DATA:
      return {
        ...state,
        data: [...payload],
        loading: true,
      };
    default:
      return { ...state };
  }
};
