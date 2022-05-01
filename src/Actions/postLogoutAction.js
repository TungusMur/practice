import { postLogoutData } from '../Api/postLogoutData';
import { POST_LOGOUT } from '../redux/action';

const postLogout = (accessToken) => (dispatch) => {
  postLogoutData(accessToken).then((data) => {
    delete localStorage.access_token;
    delete localStorage.refresh_token;
    dispatch({ type: POST_LOGOUT, payload: data });
  });
};

export default postLogout;
