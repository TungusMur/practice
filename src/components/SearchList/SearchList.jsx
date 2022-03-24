import React from 'react';
import SearchItem from '../../components/SearchItem';
import './styles.scss';

const SearchList = ({ status, data, valueInput, setValueInput, onClick }) => {
  const filterData = data.data.filter((item) => {
    const re = new RegExp(`${valueInput.toLowerCase()}`);
    if (item.address) {
      return re.test(item.address.toLowerCase());
    } else {
      return re.test(item.name.toLowerCase());
    }
  });

  return (
    <div className={`searchList ${status}`}>
      {data.loading ? (
        <div className="searchList-info">
          <p>загрузка...</p>
        </div>
      ) : filterData.length ? (
        filterData.map((item) => (
          <SearchItem data={item} key={item.id} onClick={onClick} setValueInput={setValueInput} />
        ))
      ) : (
        <div className="searchList-info">
          <p>нет данных</p>
        </div>
      )}
    </div>
  );
};

export default SearchList;
