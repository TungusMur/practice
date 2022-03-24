import { CHANGE_TICKET } from '../redux/action';

const changeTicket = (data) => (dispatch) => {
  dispatch({ type: CHANGE_TICKET, payload: data });
};

export default changeTicket;
