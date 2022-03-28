import React from 'react';
import MainHeader from '../../../common/MainHeader';
import './styles.scss';

const NotFound = () => {
  return (
    <div className="notFound">
      <MainHeader />
      <div className="notFound-form">
        <div className="notFound-content">
          <h2>Страница не найдена</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
