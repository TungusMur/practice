import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate, useLocation } from 'react-router-dom';
import { navigationItems, socialNetworkItems } from './constants';
import './styles.scss';
import '../../styles/button.scss';

const Header = () => {
  const [statusHeaderClick, setStatusHeaderClick] = useState('');
  const [statusHoverImg, setStatusHoverImg] = useState('');
  const location = useLocation();
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log(location);
    if (location.pathname === '/') {
      navigation('/ru');
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = statusHeaderClick ? 'hidden' : 'auto';
  }, [statusHeaderClick]);

  useEffect(() => {
    setStatusHeaderClick('');
  }, [location]);

  return (
    <header className={`${statusHeaderClick}`}>
      <div className="header-bar">
        <button
          className={`header-bar_button-burger button-burger ${statusHeaderClick}`}
          onClick={() => {
            statusHeaderClick ? setStatusHeaderClick('') : setStatusHeaderClick('active');
          }}
        >
          <span></span>
        </button>
        <button
          className={`header-bar_button-changeLanguage ${statusHeaderClick}`}
          onClick={() => {
            navigation(`/${params.lang === 'en' ? 'ru' : 'en'}${location.pathname.match(/\/\w+/g)?.length > 1 ? location.pathname.match(/\/\w+/g)[1] : ''}`);
          }}
        >
          {params.lang === 'en' ? 'Rus' : 'Eng'}
        </button>
      </div>
      <div className={`header-menu ${statusHeaderClick}`}>
        <div className={`header-menu-form ${statusHeaderClick}`}>
          <div className="header-content">
            <div className="header-navigation">
              {navigationItems.map((item) => (
                <div key={item.id + item.link} className="header-navigation_item">
                  <NavLink className="header-navigation_link" to={`/${params.lang}/${item.link}`}>
                    <h3>{item[`${params.lang}Chapter`]}</h3>
                  </NavLink>
                </div>
              ))}
            </div>
            <div className="header-socialNetwork">
              <div className="header-socialNetwork-form">
                {socialNetworkItems.map((item) => (
                  <div
                    key={item.id + item.chapter}
                    className="header-socialNetwork_item"
                    onMouseOver={() => {
                      setStatusHoverImg(item.chapter);
                    }}
                    onMouseOut={() => {
                      setStatusHoverImg('');
                    }}
                  >
                    <a className="header-socialNetwork_link" href={item.link}>
                      <img src={statusHoverImg === item.chapter ? item.imgHover : item.img} alt={`${item.chapter}`} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;