import React from 'react';
import CarItem from '../../components/CarItem/CarItem';
import { connect } from 'react-redux';
import './styles.scss';

const CarsItems = ({ filter, dataCars }) => {
  return (
    <div id="carsList" className="сarsItems">
      {dataCars.loading ? (
        <div className="carsList-loading">
          <p>Загрузка...</p>
        </div>
      ) : (
        dataCars.data
          .filter((item) => {
            if (filter === 'all') {
              return item;
            } else {
              return item.categoryId.id === filter;
            }
          })
          .map((item) => <CarItem data={item} key={item.id} />)
      )}
    </div>
  );
};

export default connect((data) => ({ dataCars: data.reducerCarsData }), {})(CarsItems);
