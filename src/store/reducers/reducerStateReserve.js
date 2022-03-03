import axios from 'axios';

export const CHANGE_STATE_PAGES_0 = 'CHANGE_STATE_PAGES_0';
export const CHANGE_STATE_PAGES_1 = 'CHANGE_STATE_PAGES_1';
export const CHANGE_STATE_PAGES_2 = 'CHANGE_STATE_PAGES_2';
export const CHANGE_STATE_PAGES_3 = 'CHANGE_STATE_PAGES_3';
export const CHANGE_STATE_PAGES_4 = 'CHANGE_STATE_PAGES_4';
export const CHANGE_STATE_PAGES_5 = 'CHANGE_STATE_PAGES_5';

export const CHANGE_STATE_ROUTING_0 = 'CHANGE_STATE_ROUTING_0';
export const CHANGE_STATE_ROUTING_1 = 'CHANGE_STATE_ROUTING_1';
export const CHANGE_STATE_ROUTING_2 = 'CHANGE_STATE_ROUTING_2';
export const CHANGE_STATE_ROUTING_3 = 'CHANGE_STATE_ROUTING_3';
export const CHANGE_STATE_ROUTING_4 = 'CHANGE_STATE_ROUTING_4';
export const CHANGE_STATE_ROUTING_5 = 'CHANGE_STATE_ROUTING_5';

const defaultState = {
  stateRouting: [true, false, false, false],
  statePage: [false, false, false, false],
  data: {
    city: '',
    deliveryPoint: '',
    car: '',
    color: '',
    dateFrom: '',
    dateTo: '',
    tariff: '',
    additionalServices: '',
  },
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_STATE_ROUTING_0:
      return {
        ...state,
        stateRouting: [true, false, false, false],
        statePage: [false, false, false, false],
        data: {
          ...state.data,
          ...payload,
          car: '',
          color: '',
          dateFrom: '',
          dateTo: '',
          tariff: '',
          additionalServices: '',
        },
      };
    case CHANGE_STATE_ROUTING_1:
      return {
        ...state,
        stateRouting: [true, true, false, false],
        statePage: [true, false, false, false],
        data: {
          ...state.data,
          ...payload,
          color: '',
          dateFrom: '',
          dateTo: '',
          tariff: '',
          additionalServices: '',
        },
      };
    case CHANGE_STATE_ROUTING_2:
      return {
        ...state,
        stateRouting: [true, true, true, false],
        statePage: [true, true, false, false],
        data: {
          ...state.data,
          ...payload,
        },
      };
    case CHANGE_STATE_ROUTING_3:
      return {
        ...state,
      };
    case CHANGE_STATE_ROUTING_4:
      return {
        ...state,
      };
    case CHANGE_STATE_PAGES_0:
      return {
        ...state,
        statePage: [true, false, false, false],
      };
    case CHANGE_STATE_PAGES_1:
      return {
        ...state,
        statePage: [true, true, false, false],
      };
    case CHANGE_STATE_PAGES_2:
      return {
        ...state,
        statePage: [true, true, true, false],
      };
    case CHANGE_STATE_PAGES_3:
      return {
        ...state,
        statePage: [true, true, true, true],
      };
    case CHANGE_STATE_PAGES_4:
      return {
        ...state,
        statePage: [true, false, false, false],
      };
    default:
      return { ...state };
  }
};

export const changeStateRouting = (type, data = {}) => (dispatch) => {
  dispatch({ type, payload: { ...data } });
};

export const changeStatePage = (type) => (dispatch) => {
  dispatch({ type });
};
