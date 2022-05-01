import { RESET_LOGIN } from '../redux/action';

const resetLogin = () => (dispatch) => {
  dispatch({ type: RESET_LOGIN });
};

export default resetLogin;
