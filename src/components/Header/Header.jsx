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
    if (location.pathname === '/need-for-drive/') {
      navigation('/need-for-drive/ru');
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = statusHeaderClick ? 'hidden' : 'auto';
  }, [statusHeaderClick]);

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
            navigation(`${location.pathname.replace(/(ru|en)/, params.lang === 'en' ? 'ru' : 'en')}`);
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
                  <NavLink
                    className="header-navigation_link"
                    to={`${location.pathname.match(/.+\/(ru|en)/)?.[0]}/${item.link}`}
                    onClick={() => {
                      setStatusHeaderClick('');
                      window.scrollTo(0, 0);
                    }}
                  >
                    <h3>{item[`ruChapter`]}</h3>
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
