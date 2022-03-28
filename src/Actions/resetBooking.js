import { RESET_BOOKING } from '../redux/action';

const resetBooking = () => (dispatch) => {
  dispatch({ type: RESET_BOOKING });
};

export default resetBooking;
