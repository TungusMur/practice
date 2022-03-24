import { cancelOrderData } from '../Api/cancelOrderData';
import { CANCEL_ORDER, LOADING_ORDER_DATA } from '../redux/action';

const cancelOrder = (dataOrder) => (dispatch) => {
  dispatch({ type: LOADING_ORDER_DATA });
  cancelOrderData(dataOrder).then((data) => dispatch({ type: CANCEL_ORDER, payload: data.data.data }));
};

export default cancelOrder;
