import React from 'react';
import Slider from '../Slider';

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
        </div>
        <div className="primaryMain-booking__footer"></div>
      </div>
      <Slider />
    </div>
  );
};

export default PrimaryMain;
