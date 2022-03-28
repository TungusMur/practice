import { RESET_TICKET } from '../redux/action';

const resetTicket = () => (dispatch) => {
  dispatch({ type: RESET_TICKET });
};

export default resetTicket;
