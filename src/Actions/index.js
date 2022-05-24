import fetchCars from './getCarsDataAction';
import fetchCities from './getCitiesDataAction';
import fetchCategories from './getCategoriesDataAction';
import fetchRates from './getRatesDataAction';
import fetchPoints from './getPointsDataAction';
import resetPoints from './resetPointsDataAction';
import changeTicket from './changeTicketDataAction';
import resetTicket from './resetTicketDataAction';
import postOrder from './postOrderDataAction';
import resetBooking from './resetBooking';
import fetchOrder from './getOrderDataAction';
import cancelOrder from './cancelOrderDataAction';
import resetOrder from './resetOrderDataAction';
import changeVerificationState from './changeVerificationState';

/////admin/////
import postRegister from './postRegisterAction';
import postLogin from './postLoginAction';
import postLogout from './postLogoutAction';
import postRefresh from './postRefreshAction';
import resetLogin from './resetLoginAction';
import fetchOrders from './getOrdersDataAction';
import fetchFilter from './getFilterDataAction';

export {
  fetchCars,
  fetchCities,
  fetchCategories,
  fetchRates,
  changeTicket,
  resetTicket,
  fetchPoints,
  resetPoints,
  postOrder,
  resetBooking,
  fetchOrder,
  cancelOrder,
  resetOrder,
  changeVerificationState,
  postRegister,
  postLogin,
  postLogout,
  postRefresh,
  resetLogin,
  fetchOrders,
  fetchFilter,
};
