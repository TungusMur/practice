import { GET_FILTER_CITIES, GET_FILTER_MODELS, GET_FILTER_STATUS } from '../../redux/action';

const defaultState = { dataCity: '', dataModel: '', dataStatus: '' };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_FILTER_CITIES:
      return { ...state, dataCity: [...payload] };
    case GET_FILTER_MODELS:
      return { ...state, dataModel: [...payload] };
    case GET_FILTER_STATUS:
      return { ...state, dataStatus: [...payload] };
    default:
      return { ...state };
  }
};
