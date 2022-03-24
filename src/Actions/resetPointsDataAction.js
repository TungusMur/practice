import { RESET_POINTS_DATA } from '../redux/action';

const resetPoints = () => (dispatch) => {
  dispatch({ type: RESET_POINTS_DATA });
};

export default resetPoints;
