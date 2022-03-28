import { RESET_ORDER_DATA } from '../redux/action';

const resetOrder = () => (dispatch) => {
  dispatch({ type: RESET_ORDER_DATA });
};

export default resetOrder;
