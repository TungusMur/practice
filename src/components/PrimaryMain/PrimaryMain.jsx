import React from 'react';
import Slider from '../Slider';
import MainHeader from '../../common/MainHeader';
import '../../styles/button.scss';
import './styles.scss';

const PrimaryMain = () => {
  return (
    <div className="primaryMain">
      <div className="primaryMain-booking">
        <MainHeader />
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
      <Slider />
    </div>
  );
};

export default PrimaryMain;
