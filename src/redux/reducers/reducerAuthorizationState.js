import { POST_LOGIN, ERROR_LOGIN, POST_REFRESH, ERROR_REFRESH, RESET_LOGIN } from '../../redux/action';

const defaultState = { statusLogin: '', statusRefresh: '', expiresIn: 0, loading: true };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case POST_REFRESH: {
      return { ...state, statusRefresh: payload.status, expiresIn: payload.data.expires_in, loading: false };
    }
    case ERROR_REFRESH: {
      return { ...state, statusRefresh: payload.response.status, expiresIn: 0, loading: false };
    }
    case POST_LOGIN: {
      return { ...state, statusLogin: payload.status, expiresIn: payload.data.expires_in };
    }
    case ERROR_LOGIN: {
      return { ...state, statusLogin: payload.response.status };
    }
    case RESET_LOGIN: {
      return { ...state, statusLogin: '' };
    }
    default: {
      return { ...state };
    }
  }
};
