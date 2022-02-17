import React from 'react';

const SliderItems = ({ className, activeIndex, dataList }) =>
  [-1, 0, 1].map((item) => {
    const index =
      activeIndex + item < 0
        ? activeIndex + dataList.length + item
        : activeIndex + item > dataList.length - 1
        ? activeIndex + item - dataList.length
        : activeIndex + item;
    return (
      <div
        className={`${className}__item ${dataList[index].id === activeIndex ? 'active' : ''}`}
        style={{ left: `${item * 80}%` }}
        // key={item === 2 ? `${dataList[index].id}next` : item === -2 ? `${dataList[index].id}prev` : dataList[index].id}
        key={dataList[index].id}
      >
        <div className={`${className}__item-img`}>
          <img src={dataList[index].img} alt="car" />
        </div>
        <div className={`${className}__item-content`}>
          <div className={`${className}__item-chapter`}>
            <h2>{dataList[index].chapter}</h2>
          </div>
          <div className={`${className}__item-description`}>
            <h6>{dataList[index].description}</h6>
          </div>
          <button className={`${className}__item-button id${dataList[index].id}`}>Подобронее</button>
        </div>
      </div>
    );
  });

export default SliderItems;
