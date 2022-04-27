import React from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import iconMap from '../../assets/img/Map/icon.svg';
import './styles.scss';

const MainHeader = () => {
  const location = useLocation();

  return (
    <div id="mainHeader" className="mainHeader">
      <div className="mainHeader-form">
        <div className="mainHeader__logo">
          <NavLink
            className="mainHeader__link"
            to={`${location.pathname.match(/.+\/(ru|en)/)[0]}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <h4>Need for drive</h4>
          </NavLink>
        </div>
        <div className="mainHeader__map">
          <img src={iconMap} alt="iconMap" />
          <p>Ульяновск</p>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
