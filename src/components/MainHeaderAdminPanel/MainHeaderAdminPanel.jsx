import React from 'react';
import iconNotification from '../../assets/img/Admin/iconNotification.svg';
import iconSearch from '../../assets/img/Admin/iconSearch.svg';
import ProfileImg from '../../assets/img/Admin/ProfileImg.png';
import './styles.scss';

const MainHeaderAdminPanel = () => (
  <div className="mainHeaderAdminPanel">
    <div className="mainHeaderAdminPanel-search">
      <div className="mainHeaderAdminPanel-search_image">
        <img src={iconSearch} alt="iconSearch" />
      </div>
      <input className="mainHeaderAdminPanel-search_input" placeholder="Поиск ..." />
    </div>
    <div className="mainHeaderAdminPanel-notification">
      <div className="mainHeaderAdminPanel-notification_image">
        <img src={iconNotification} alt="iconNotification" />
      </div>
    </div>
    <div className="mainHeaderAdminPanel-profile">
      <div className="mainHeaderAdminPanel-profile_image">
        <img src={ProfileImg} alt="iconNotification" />
      </div>
      <div className="mainHeaderAdminPanel-profile_nickname">
        <p>Admin</p>
      </div>
    </div>
  </div>
);
export default MainHeaderAdminPanel;
