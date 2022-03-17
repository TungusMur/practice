import { GET_RATES_DATA, LOADING_RATES_DATA } from '../../redux/action';

const defaultState = { data: [], loading: false };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOADING_RATES_DATA:
      return { loading: false };
    case GET_RATES_DATA:
      return { data: [...payload], loading: true };
    default:
      return { ...state };
  }
};
