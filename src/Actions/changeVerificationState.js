import { CHANGE_VERIFICATION } from '../redux/action';

const changeVerificationState = (state) => (dispatch) => {
  dispatch({ type: CHANGE_VERIFICATION, payload: state });
};

export default changeVerificationState;
