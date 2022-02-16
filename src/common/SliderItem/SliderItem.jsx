import React from 'react';

const SliderItems = ({ className, activeIndex, dataList }) =>
  [-2, -1, 0, 1, 2].map((item) => {
    const index =
      activeIndex + item < 0
        ? activeIndex + dataList.length + item
        : activeIndex + item > dataList.length - 1
        ? activeIndex + item - dataList.length
        : activeIndex + item;
    console.log(index, item, activeIndex);
    return (
      <div
        className={`${className}__item`}
        style={{ left: `${item}00%` }}
        key={item !== 2 ? dataList[index].id : `${dataList[index].id}next`}
      >
        <div className={`${className}__item-img`}>
          <img src={dataList[index].img} alt="car" />
        </div>
        <div className={`${className}__item-info`}>
          <div className={`${className}__item-chapter`}>
            <h2>{dataList[index].chapter}</h2>
          </div>
          <div className={`${className}__item-description`}>
            <h6>{dataList[index].description}</h6>
          </div>
        </div>
        <button className={`${className}__button`}>
          {item !== 2 ? dataList[index].id : `${dataList[index].id}next`}
        </button>
      </div>
    );
  });

export default SliderItems;
