import { GET_FILTER_MODELS, GET_FILTER_CITIES, GET_FILTER_STATUS } from '../redux/action';
import { getFilterModelsData } from '../Api/getFilterModelsData';
import { getFilterCitiesData } from '../Api/getFilterCitiesData';
import { getFilterStatusData } from '../Api/getFilterStatusData';

const fetchFilter = () => (dispath) => {
  getFilterModelsData().then((data) =>
    dispath({
      type: GET_FILTER_MODELS,
      payload: data.data.data.filter((value, index, array) => array.indexOf(value) === index),
    })
  );

  getFilterCitiesData().then((data) =>
    dispath({
      type: GET_FILTER_CITIES,
      payload: data.data.data,
    })
  );

  getFilterStatusData().then((data) =>
    dispath({
      type: GET_FILTER_STATUS,
      payload: data.data.data,
    })
  );
};

export default fetchFilter;
