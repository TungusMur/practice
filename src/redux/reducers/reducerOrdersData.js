import { LOADING_ORDERS_DATA, GET_ORDERS_DATA, ERROR_ORDERS_DATA } from '../action';

const defaultState = { data: '', end: 0, loading: true, status: 200 };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOADING_ORDERS_DATA:
      return { ...state, loading: true, data: '' };
    case GET_ORDERS_DATA:
      return {
        ...state,
        data: [...payload.data],
        loading: false,
        status: payload.status,
        end: Math.ceil(payload.count / 4),
      };
    case ERROR_ORDERS_DATA:
      return { ...state, loading: false, status: payload.status, status: 404 };
    default:
      return { ...state };
  }
};
