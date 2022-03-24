import React from 'react';
import { useParams } from 'react-router';
import MainHeader from '../../../common/MainHeader';
import './styles.scss';

const NotFound = () => {
  const params = useParams();
  return (
    <div className="notFound">
      <MainHeader />
      <div className="notFound-form">
        <div className="notFound-content">
          <h2>{params.lang === 'en' ? 'Page not found' : 'Страница не найдена'}</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
