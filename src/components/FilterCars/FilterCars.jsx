import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const FilterCars = ({ dataCategories, active, setActive }) => {
  return (
    <div id="selectModel-filter" className="selectModel-filter">
      <label className={`selectModel-filter__item ${active === 'all' ? 'active' : ''}`}>
        <input
          id="filterCar"
          type="radio"
          name="filter-car"
          value="all"
          onChange={(e) => {
            setActive(e.target.value);
          }}
          checked={active === 'all'}
        />
        <p>Все модели</p>
      </label>
      {dataCategories.data.map((item) => (
        <label key={item.id} className={`selectModel-filter__item ${active === item.id ? 'active' : ''}`}>
          <input
            id="filterCar"
            type="radio"
            name="filter-car"
            value={item.id}
            onChange={(e) => {
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
