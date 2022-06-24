import React, { useState } from 'react';
import PageFilterItem from '../PageFilterItem';
import './styles.scss';

const PageFilter = ({ data, dataDefault, filters, setFilters, volume }) => {
  const [dataReturn, setDataReturn] = useState([...filters]);
  return (
    <div className="pageFilter">
      <ul className="pageFilter-list">
        {data.map((item, index) => (
          <PageFilterItem
            item={item}
            index={index}
            dataReturn={dataReturn}
            dataDefault={dataDefault}
            setDataReturn={setDataReturn}
            key={`list${index}`}
          />
        ))}
      </ul>
      <div className="pageFilter-action">
        <button
          className="pageFilter-action_button pageFilter-action_button-reset"
          onClick={() => {
            setDataReturn((oldDataReturn) => [...oldDataReturn.map(() => '')]);
            if (
              filters.reduce(
                (previousValue, currentValue) => (currentValue === '' ? previousValue + 1 : previousValue),
                0
              ) !== volume
            ) {
              setFilters((oldFilters) => [...oldFilters.map(() => '')]);
            }
          }}
        >
          <p>Сбросить</p>
        </button>
        <button
          className="pageFilter-action_button pageFilter-action_button-accept"
          onClick={() => {
            if (
              dataReturn.reduce(
                (previousValue, currentValue) => (currentValue === '' ? previousValue + 1 : previousValue),
                0
              ) !== volume
            ) {
              setFilters([...dataReturn]);
            }
          }}
        >
         <p>Принять</p>
        </button>
      </div>
    </div>
  );
};

export default PageFilter;
