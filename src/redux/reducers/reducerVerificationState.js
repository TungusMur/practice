import { CHANGE_VERIFICATION } from '../action';

const defaultState = { state: false };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_VERIFICATION:
      return { ...state, state: payload };
    default:
      return { ...state };
  }
};
