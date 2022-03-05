import {
  CHANGE_STATE_ROUTING_0,
  CHANGE_STATE_ROUTING_1,
  CHANGE_STATE_ROUTING_2,
  CHANGE_STATE_ROUTING_3,
  CHANGE_STATE_PAGES_RESET,
  CHANGE_STATE_PAGES_0,
  CHANGE_STATE_PAGES_1,
  CHANGE_STATE_PAGES_2,
} from '../action';

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
    fullTank: '',
    rightHand: '',
    childSeat: '',
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
          fullTank: '',
          rightHand: '',
          childSeat: '',
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
          fullTank: '',
          rightHand: '',
          childSeat: '',
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
        stateRouting: [true, true, true, true],
        statePage: [true, true, true, false],
      };
    case CHANGE_STATE_PAGES_RESET:
      return {
        ...state,
        statePage: [false, false, false, false],
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
    default:
      return { ...state };
  }
};

export const changeStateRouting =
  (type, data = {}) =>
  (dispatch) => {
    dispatch({ type, payload: { ...data } });
  };

export const changeStatePage =
  (type = CHANGE_STATE_PAGES_RESET) =>
  (dispatch) => {
    dispatch({ type });
  };
