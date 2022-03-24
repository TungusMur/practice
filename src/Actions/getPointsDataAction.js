import { getPointsData } from '../Api/getPointsData';
import { GET_POINTS_DATA, LOADING_POINTS_DATA } from '../redux/action';

const fetchPoints = (cityId) => (dispatch) => {
  dispatch({ type: LOADING_POINTS_DATA });
  getPointsData(cityId).then((data) => dispatch({ type: GET_POINTS_DATA, payload: data.data.data }));
};

export default fetchPoints;
