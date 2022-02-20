import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import facebook from '../../assets/img/SocialNetwork/facebook.svg';
import instagram from '../../assets/img/SocialNetwork/instagram.svg';
import telegram from '../../assets/img/SocialNetwork/telegram.svg';
import './styles.scss';

const Header = () => {
  const [activeStatusHeaderActions, setActiveStatusHeaderActions] = useState('');
  return (
    <header className={`${activeStatusHeaderActions}`}>
      <div className="header-form">
        <button
          className={`header-form_button-burger button-burger ${activeStatusHeaderActions}`}
          onClick={() => {
            activeStatusHeaderActions ? setActiveStatusHeaderActions('') : setActiveStatusHeaderActions('active');
            console.log('asd');
          }}
        >
          <span></span>
        </button>
        <button className="header-form_button-changeLanguage">Eng</button>
      </div>
      <div className={`header-menu ${activeStatusHeaderActions}`}>
        <div className={`header-menu-form ${activeStatusHeaderActions}`}>
          <div className="header-content">
            <div className="header-navigation">
              <div className="header-navigation_item">
                <NavLink className="header-navigation_link" to="#">
                  <h3>ПАРКОВКА</h3>
                </NavLink>
              </div>
              <div className="header-navigation_item">
                <NavLink className="header-navigation_link" to="#">
                  <h3>СТРАХОВКА</h3>
                </NavLink>
              </div>
              <div className="header-navigation_item">
                <NavLink className="header-navigation_link" to="#">
                  <h3>БЕНЗИН</h3>
                </NavLink>
              </div>
              <div className="header-navigation_item">
                <NavLink className="header-navigation_link" to="#">
                  <h3>ОБСЛУЖИВАНИЕ</h3>
                </NavLink>
              </div>
            </div>
            <div className="header-socialNetwork">
              <div className="header-socialNetwork-form">
                <div className="header-socialNetwork_item">
                  <NavLink className="header-socialNetwork_link" to="#">
                    <img src={telegram} alt="telegram" />
                  </NavLink>{' '}
                </div>
                <div className="header-socialNetwork_item">
                  <NavLink className="header-socialNetwork_link" to="#">
                    <img src={facebook} alt="facebook" />
                  </NavLink>
                </div>
                <div className="header-socialNetwork_item">
                  <NavLink className="header-socialNetwork_link" to="#">
                    <img src={instagram} alt="instagram" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
