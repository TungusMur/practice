import { getCitiesData } from '../Api/getCitiesData';
import { GET_CITIES_DATA, LOADING_CITIES_DATA } from '../redux/action';

const fetchCities = () => (dispatch) => {
  dispatch({ type: LOADING_CITIES_DATA });
  getCitiesData().then((data) => dispatch({ type: GET_CITIES_DATA, payload: data.data.data }));
};

export default fetchCities;
