import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import PrimaryMain from '../PrimaryMain';
import './styles.scss';

const Main = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.lang !== 'en' && params.lang !== 'ru') {
      navigation(`/ru${location.pathname.match(/\/\w+/g)?.length > 1 ? location.pathname.match(/\/\w+/g)[1] : ''}`);
    }
  }, []);

  return (
    <main>
      <Routes>
        <Route index element={<PrimaryMain />} />
      </Routes>
    </main>
  );
};

export default Main;
