import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

const FilterCars = ({ dataCategories, active, setActive }) => {
  return (
    <div className="filterCars">
      <label className={`filterCars__item ${active === 'all' ? 'active' : ''}`}>
        <input
          id="filterCar"
          type="radio"
          name="filter-car"
          value="all"
          onChange={(e) => {
            document.getElementById('carsList').scrollTo(0, 0);
            setActive(e.target.value);
          }}
          checked={active === 'all'}
        />
        <p>Все модели</p>
      </label>
      {dataCategories.data.map((item) => (
        <label key={item.id} className={`filterCars__item ${active === item.id ? 'active' : ''}`}>
          <input
            id="filterCar"
            type="radio"
            name="filter-car"
            value={item.id}
            onChange={(e) => {
              document.getElementById('carsList').scrollTo(0, 0);
              setActive(e.target.value);
            }}
            checked={active === item.id}
          />
          <p>{item.name}</p>
        </label>
      ))}
    </div>
  );
};

export default connect((data) => ({ dataCategories: data.reducerCategoriesData }))(FilterCars);
