import { postRefreshData } from '../Api/postRefreshData';
import { POST_REFRESH, ERROR_REFRESH, LOADING_REFRESH } from '../redux/action';

const postRefresh = (refreshToken) => (dispatch) => {
  postRefreshData(refreshToken)
    .then((data) => {
      localStorage.access_token = data.data.access_token;
      localStorage.refresh_token = data.data.refresh_token;
      dispatch({ type: POST_REFRESH, payload: data });
    })
    .catch((data) => {
      delete localStorage.access_token;
      delete localStorage.refresh_token;
      dispatch({ type: ERROR_REFRESH, payload: data });
    });
};

export default postRefresh;
