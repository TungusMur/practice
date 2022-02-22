import React from 'react';
import { NavLink } from 'react-router-dom';
import iconMap from '../../assets/img/Map/icon.svg';
import './styles.scss';

const MainHeader = () => {
  return (
    <div className="mainHeader">
      <div className="mainHeader-form">
        <div className="mainHeader__logo">
          <NavLink className="mainHeader__link" to="/">
            <h4>Need for drive</h4>
          </NavLink>
        </div>
        <div className="mainHeader__map">
          <img src={iconMap} alt="iconMap" />
          <h5>Ульяновск</h5>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
