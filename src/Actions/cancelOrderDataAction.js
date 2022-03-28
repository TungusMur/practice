import { cancelOrderData } from '../Api/cancelOrderData';
import { CANCEL_ORDER } from '../redux/action';

const cancelOrder = (dataOrder) => (dispatch) => {
  cancelOrderData(dataOrder).then(() => dispatch({ type: CANCEL_ORDER }));
};

export default cancelOrder;
