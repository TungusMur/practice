import { postRegisterData } from '../Api/postRegisterData';
import { postLoginData } from '../Api/postLoginData';
import { POST_REGISTER, POST_LOGIN, ERROR_LOGIN } from '../redux/action';

const postRegister = (dataUser) => (dispatch) => {
  postRegisterData(dataUser).then((data) => {
    dispatch({ type: POST_REGISTER, payload: data });
    
    postLoginData(dataUser)
      .then((data) => {
        localStorage.access_token = data.data.access_token;
        localStorage.refresh_token = data.data.refresh_token;
        dispatch({ type: POST_LOGIN, payload: data });
      })
      .catch((data) => dispatch({ type: ERROR_LOGIN, payload: data }));
  });
};

export default postRegister;
