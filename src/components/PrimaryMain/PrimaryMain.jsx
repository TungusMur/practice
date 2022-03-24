import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from '../Slider';
import MainHeader from '../../common/MainHeader';
import '../../styles/button.scss';
import './styles.scss';

const PrimaryMain = () => {
  const params = useParams();
  const navigation = useNavigate();

  return (
    <div className="primaryMain">
      <div className="primaryMain-booking">
        <MainHeader />
        <div className="primaryMain-booking__content">
          <div className="primaryMain-booking__chapter first">
            <h1>{params.lang === 'en' ? 'Carsharing' : 'Каршеринг'}</h1>
          </div>
          <div className="primaryMain-booking__chapter second">
            <h1>Need for drive</h1>
          </div>
          <div className="primaryMain-booking__description">
            <h6>
              {params.lang === 'en'
                ? 'Minute-by-minute car rental in your city'
                : 'Поминутная аренда авто твоего города'}
            </h6>
          </div>
          <button
            className="primaryMain-booking__button button-classic"
            onClick={() => {
              navigation(`/${params.lang}/reserve/location`);
              window.scrollTo(0, 0);
            }}
          >
            {params.lang === 'en' ? 'Reserve' : 'Забронировать'}
          </button>
        </div>
        <div className="primaryMain-booking__footer">
          <div className="primaryMain-booking__life">
            <p>© 2016-2019 «Need for drive»</p>
          </div>
          <div className="primaryMain-booking__phone">
            <p>8 (495) 234-22-44</p>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default PrimaryMain;
