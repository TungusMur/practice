import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import iconMap from '../../assets/img/Map/icon.svg';
import './styles.scss';

const MainHeader = () => {
  const params = useParams();

  return (
    <div id="mainHeader" className="mainHeader">
      <div className="mainHeader-form">
        <div className="mainHeader__logo">
          <NavLink
            className="mainHeader__link"
            to={`/${params.lang}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <h4>Need for drive</h4>
          </NavLink>
        </div>
        <div className="mainHeader__map">
          <img src={iconMap} alt="iconMap" />
          <p>{params.lang === 'en' ? 'Ulyanovsk' : 'Ульяновск'}</p>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
