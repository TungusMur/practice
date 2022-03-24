import { GET_ORDER_DATA, LOADING_ORDER_DATA, CANCEL_ORDER } from '../../redux/action';

const defaultState = { data: '', loading: false };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ORDER_DATA:
      return {
        ...state,
        loading: false,
        data: { ...payload },
      };
    case CANCEL_ORDER:
      return { ...state, loading: false, data: { ...payload } };
    case LOADING_ORDER_DATA:
      return {
        ...state,
        loading: true,
        data: '',
      };
    default:
      return {
        ...state,
      };
  }
};
