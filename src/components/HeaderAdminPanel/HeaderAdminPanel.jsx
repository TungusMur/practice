import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navigationItems } from './constants';
import logo from '../../assets/img/Admin/Logo.svg';
import { connect } from 'react-redux';
import { fetchFilter } from '../../Actions';
import './styles.scss';

const HeaderAdminPanel = ({ fetchFilter }) => {
  const [pageActive, setPageActive] = useState(null);
  const [statusHoverImg, setStatusHoverImg] = useState('');
  const location = useLocation();

  useEffect(() => {
    fetchFilter();
  }, []);

  useEffect(() => {
    switch (location.pathname.replace(/.+\//, '')) {
      case 'carCard': {
        setPageActive(0);
        break;
      }
      case 'cars': {
        setPageActive(1);
        break;
      }
      case 'orders': {
        setPageActive(2);
        break;
      }
    }
  }, [location]);

  return (
    <header className="headerAdminPanel">
      <div className="headerAdminPanel-title">
        <NavLink className="headerAdminPanel-title_link" to="">
          <div className="headerAdminPanel-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="headerAdminPanel-name">
            <h5>Need for car</h5>
          </div>
        </NavLink>
      </div>
      <div className="headerAdminPanel-navigation">
        {navigationItems.map((item) => (
          <NavLink
            to={item.link}
            className={({ isActive }) => `headerAdminPanel-navigation_link${isActive ? ' active' : ''}`}
            key={item.id}
            onMouseOver={() => {
              setStatusHoverImg(item.id);
            }}
            onMouseOut={() => {
              setStatusHoverImg('');
            }}
          >
            <div className="headerAdminPanel-navigation_item" key={item.id}>
              <div className="headerAdminPanel-navigation_image">
                <img
                  src={pageActive === item.id || statusHoverImg === item.id ? item.imgActive : item.img}
                  alt="icon"
                />
              </div>
              <div className="headerAdminPanel-navigation_chapter">
                <p>{item.chapter}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default connect(null, { fetchFilter })(HeaderAdminPanel);
