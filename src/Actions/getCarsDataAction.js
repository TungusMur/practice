import { getCarsData } from '../Api/getCarsData';
import { GET_CARS_DATA, LOADING_CARS_DATA } from '../redux/action';

const fetchCars = () => (dispatch) => {
  dispatch({ type: LOADING_CARS_DATA });
  getCarsData().then((data) =>
    dispatch({
      type: GET_CARS_DATA,
      payload: data.data.data,
    })
  );
};

export default fetchCars;
