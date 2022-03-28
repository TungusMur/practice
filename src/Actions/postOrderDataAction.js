import { postOrderData } from '../Api/postOrderData';
import { GET_ORDER_DATA, LOADING_ORDER_DATA, ERROR_ORDER_DATA } from '../redux/action';

const postOrder = (data) => (dispatch) => {
  dispatch({ type: LOADING_ORDER_DATA });
  postOrderData(data)
    .then((data) => dispatch({ type: GET_ORDER_DATA, payload: { data: data.data.data, status: data.status } }))
    .catch(() => dispatch({ type: ERROR_ORDER_DATA, payload: 404 }));
};

export default postOrder;
