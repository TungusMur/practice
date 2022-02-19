import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrimaryMain from '../PrimaryMain';
import './styles.scss';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path={'/'} element={<PrimaryMain />} />
      </Routes>
    </main>
  );
};

export default Main;
