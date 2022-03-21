import {
  CHANGE_STATE_ROUTING_0,
  CHANGE_STATE_ROUTING_1,
  CHANGE_STATE_ROUTING_2,
  CHANGE_STATE_ROUTING_3,
  CHANGE_STATE_PAGES_RESET,
  CHANGE_STATE_PAGES_0,
  CHANGE_STATE_PAGES_1,
  CHANGE_STATE_PAGES_2,
  CHANGE_STATE_PAGES_3,
} from '../action';

const defaultState = {
  stateRouting: [true, false, false, false],
  statePage: [false, false, false, false],
  verification: false,
};

export default (state = defaultState, { type }) => {
  switch (type) {
    case CHANGE_STATE_ROUTING_0:
      return {
        ...state,
        stateRouting: [true, false, false, false],
      };
    case CHANGE_STATE_ROUTING_1:
      return {
        ...state,
        stateRouting: [true, true, false, false],
      };
    case CHANGE_STATE_ROUTING_2:
      return {
        ...state,
        stateRouting: [true, true, true, false],
      };
    case CHANGE_STATE_ROUTING_3:
      return {
        ...state,
        stateRouting: [true, true, true, true],
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
    case CHANGE_STATE_PAGES_3:
      return {
        ...state,
        statePage: [true, true, true, true],
      };
    default:
      return { ...state };
  }
};

export const changeStateRouting = (type) => (dispatch) => {
  dispatch({ type });
};

export const changeStatePage =
  (type = CHANGE_STATE_PAGES_RESET) =>
  (dispatch) => {
    dispatch({ type });
  };
