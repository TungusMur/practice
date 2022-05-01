import { getCheckData } from '../Api/getCheckData';

const getCheck = (data) => (dispatch) => {
  getCheckData(data).then((data) => dispatch({ type: 'DATA', payload: data }));
};

export default getCheck;
