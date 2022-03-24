import { postOrderData } from '../Api/postOrderData';
import { POST_ORDER } from '../redux/action';

const postOrder = (data) => (dispatch) => {
  postOrderData(data).then((data) => dispatch({ type: POST_ORDER, payload: data.data.data.id }));
};

export default postOrder;
