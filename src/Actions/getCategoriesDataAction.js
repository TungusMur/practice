import { getCategoriesData } from '../Api/getCategoriesData';
import { GET_CATEGORIES_DATA, LOADING_CATEGORIES_DATA } from '../redux/action';

const fetchCategories = () => (dispatch) => {
  dispatch({ type: LOADING_CATEGORIES_DATA });

  getCategoriesData().then((data) => dispatch({ type: GET_CATEGORIES_DATA, payload: data.data.data }));
};

export default fetchCategories;
