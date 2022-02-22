import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import facebook from '../../assets/img/SocialNetwork/facebook.svg';
import facebookHover from '../../assets/img/SocialNetwork/facebookHover.svg';
import instagram from '../../assets/img/SocialNetwork/instagram.svg';
import instagramHover from '../../assets/img/SocialNetwork/instagramHover.svg';
import telegram from '../../assets/img/SocialNetwork/telegram.svg';
import telegramHover from '../../assets/img/SocialNetwork/telegramHover.svg';
import './styles.scss';
import '../../styles/button.scss';

const Header = () => {
  const [statusHeaderClick, setStatusHeaderClick] = useState('');
  const [statusHoverImg, setStatusHoverImg] = useState('');

  useEffect(() => {
    document.body.style.overflow = statusHeaderClick ? 'hidden' : 'auto';
  }, [statusHeaderClick]);

  return (
    <header className={`${statusHeaderClick}`}>
      {/* <div className="header-primary">
        <div className="header-primary-form">
          <div className="header-primary-content">
            <div className="header-primary__logo">
              <NavLink className="header-primary_link" to="/">
                <h4>Need for drive</h4>
              </NavLink>
            </div>
            <div className="header-primary__map">
              <img src={iconMap} alt="iconMap" />
              <h5>Ульяновск</h5>
            </div>
          </div>
        </div>
      </div> */}
      <div className="header-bar">
        <button
          className={`header-bar_button-burger button-burger ${statusHeaderClick}`}
          onClick={() => {
            statusHeaderClick ? setStatusHeaderClick('') : setStatusHeaderClick('active');
          }}
        >
          <span></span>
        </button>
        <button className={`header-bar_button-changeLanguage ${statusHeaderClick}`}>Eng</button>
      </div>
      <div className={`header-menu ${statusHeaderClick}`}>
        <div className={`header-menu-form ${statusHeaderClick}`}>
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
                <div
                  className="header-socialNetwork_item"
                  onMouseOver={() => {
                    setStatusHoverImg('telegram');
                  }}
                  onMouseOut={() => {
                    setStatusHoverImg('');
                  }}
                >
                  <NavLink className="header-socialNetwork_link" to="/telegram">
                    <img src={statusHoverImg === 'telegram' ? telegramHover : telegram} alt="telegram" />
                  </NavLink>{' '}
                </div>
                <div
                  className="header-socialNetwork_item"
                  onMouseOver={() => {
                    setStatusHoverImg('facebook');
                  }}
                  onMouseOut={() => {
                    setStatusHoverImg('');
                  }}
                >
                  <NavLink className="header-socialNetwork_link" to="/facebook">
                    <img src={statusHoverImg === 'facebook' ? facebookHover : facebook} alt="facebook" />
                  </NavLink>
                </div>
                <div
                  className="header-socialNetwork_item"
                  onMouseOver={() => {
                    setStatusHoverImg('instagram');
                  }}
                  onMouseOut={() => {
                    setStatusHoverImg('');
                  }}
                >
                  <NavLink className="header-socialNetwork_link" to="/instagram">
                    <img src={statusHoverImg === 'instagram' ? instagramHover : instagram} alt="instagram" />
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
