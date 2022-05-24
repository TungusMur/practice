import { GET_ORDERS_DATA, LOADING_ORDERS_DATA, ERROR_ORDERS_DATA } from '../redux/action';
import { getOrdersData } from '../Api/getOrdersData';

const fetchOrders = (page, filters) => (dispath) => {
  dispath({ type: LOADING_ORDERS_DATA });
  getOrdersData(localStorage.access_token, page, filters)
    .then((data) =>
      dispath({ type: GET_ORDERS_DATA, payload: { status: data.status, data: data.data.data, count: data.data.count } })
    )
    .catch((data) => dispath({ type: ERROR_ORDERS_DATA, payload: data.responce.status }));
};

export default fetchOrders;
