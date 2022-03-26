import {
  GET_ORDER_DATA,
  LOADING_ORDER_DATA,
  CANCEL_ORDER,
  ERROR_ORDER_DATA,
  RESET_ORDER_DATA,
} from '../../redux/action';

const defaultState = { data: '', loading: false, status: '404' };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ORDER_DATA:
      return {
        ...state,
        loading: false,
        data: { ...payload.data },
        status: payload.status,
      };
    case RESET_ORDER_DATA:
      return { ...state, ...defaultState };
    case CANCEL_ORDER:
      return { ...state, ...defaultState };
    case ERROR_ORDER_DATA:
      return { ...state, loading: false, status: payload.status };
    case LOADING_ORDER_DATA:
      return {
        ...state,
        loading: true,
        data: '',
        status: 404,
      };
    default:
      return {
        ...state,
      };
  }
};
