import React from 'react';
import iconMap from '../../assets/img/Map/icon.svg';
import '../../assets/styles/button.scss';
import './PrimaryMain.scss';

const PrimaryMain = () => {
  return (
    <div className="primaryMain">
      <div className="primaryMain-booking">
        <div className="primaryMain-booking__header">
          <div className="primaryMain-booking__logo">
            <h4>Need for drive</h4>
          </div>
          <div className="primaryMain-booking__map">
            <img src={iconMap} alt="iconMap" />
            <h5>Ульяновск</h5>
          </div>
        </div>
        <div className="primaryMain-booking__content">
          <div className="primaryMain-booking__chapter first">
            <h1>Каршеринг</h1>
          </div>
          <div className="primaryMain-booking__chapter second">
            <h1>Need for drive</h1>
          </div>
          <div className="primaryMain-booking__description">
            <h6>Поминутная аренда авто твоего города</h6>
          </div>
          <button className="primaryMain-booking__button button-classic">Забронировать</button>
        </div>
        <div className="primaryMain-booking__footer">
          <div className="primaryMain-booking__life">
            <h5>© 2016-2019 «Need for drive»</h5>
          </div>
          <div className="primaryMain-booking__phone">
            <h5>8 (495) 234-22-44</h5>
          </div>
        </div>
      </div>
      <div className="primaryMain-slider">тут должен быть слайдер</div>
    </div>
  );
};

export default PrimaryMain;
