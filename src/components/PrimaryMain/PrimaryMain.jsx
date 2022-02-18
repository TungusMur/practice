import React from 'react';

const PrimaryMain = () => {
  return (
    <div className="primaryMain">
      <div className="primaryMain-booking">
        <div className="primaryMain-booking__header">
          <div className="primaryMain-booking__logo"></div>
          <div className="primaryMain-booking__map"></div>
        </div>
        <div className="primaryMain-booking__content">
          <div></div>
          <div></div>
          <button>Забронировать</button>
        </div>
        <div className="primaryMain-booking__footer"></div>
      </div>
      <div className="primaryMain-slider">тут должен быть слайдер</div>
    </div>
  );
};

export default PrimaryMain;
