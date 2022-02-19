import React, { useState } from 'react';
import burger from '../../assets/img/Button/burger.svg';
import './styles.scss';

const Header = () => {
  const [activeStatusHeaderActions, setActiveStatusHeaderActions] = useState('');
  return (
    <header>
      <div className="header-form">
        <button
          className={`header-burger button-burger ${activeStatusHeaderActions}`}
          onClick={() => {
            activeStatusHeaderActions ? setActiveStatusHeaderActions('') : setActiveStatusHeaderActions('active');
            console.log('asd');
          }}
        >
          <span></span>
        </button>
        {/* <img src={burger} alt="burger" /> */}
        <button className="header-changeLanguage">Eng</button>
      </div>
      <div className={`header-actions ${activeStatusHeaderActions}`}></div>
    </header>
  );
};

export default Header;
