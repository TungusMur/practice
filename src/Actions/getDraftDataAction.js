import { getDraftData } from '../Api/getDraftData';
import { GET_DRAFT_DATA } from '../redux/action';

const fetchDraft = () => (dispatch) => {
  getDraftData().then((data) => dispatch({ type: GET_DRAFT_DATA, payload: data }));
  // .catch((error) => dispatch({ type: GET_DRAFT_DATA, payload: error }));
};

export default fetchDraft;
