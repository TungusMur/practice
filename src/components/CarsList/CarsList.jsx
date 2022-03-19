import React, { useEffect, useCallback } from 'react';
import CarItem from '../../components/CarItem/CarItem';
import { adaptiveHeightCarsList } from './functions';
import { connect } from 'react-redux';
import './styles.scss';

const CarsItems = ({ filter, dataCars }) => {
  const dataLoading = [1, 2, 3, 4];

  const resizeHeightCarsList = useCallback(() => {
    document.getElementById('carsList').style.height = `${adaptiveHeightCarsList()}px`;
  }, []);

  useEffect(() => {
    resizeHeightCarsList();

    window.addEventListener('resize', resizeHeightCarsList);

    return () => {
      window.removeEventListener('resize', resizeHeightCarsList);
    };
  }, []);
  return (
    <div id="carsList" className="сarsItems">
      {dataCars.loading ? (
        dataCars.data
          .filter((item) => {
            if (filter === 'all') {
              return item;
            } else {
              return item.categoryId.id === filter;
            }
          })
          .map((item) => <CarItem data={item} key={item.id} />)
      ) : (
        <div className="carsList-loading">
          <p>Загрузка...</p>
        </div>
      )}
    </div>
  );
};

export default connect((data) => ({ dataCars: data.reducerCarsData }), {})(CarsItems);
