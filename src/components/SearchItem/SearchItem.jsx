import React from 'react';
import './styles.scss';

const SearchItem = ({ data, onClick, setValueInput }) => {
  return (
    <div className="searchItem">
      <button
        className="searchItem__button"
        onClick={() => {
          onClick(data);
          setValueInput(data.address || data.name);
        }}
      >
        <p>{data.address || data.name}</p>
      </button>
    </div>
  );
};

export default SearchItem;
