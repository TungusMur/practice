import { getRatesData } from '../Api/getRatesData';
import { GET_RATES_DATA, LOADING_RATES_DATA } from '../redux/action';

const fetchRates = () => (dispatch) => {
  dispatch({ type: LOADING_RATES_DATA });

  getRatesData().then((data) => dispatch({ type: GET_RATES_DATA, payload: data.data.data }));
};

export default fetchRates;
