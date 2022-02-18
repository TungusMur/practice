import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrimaryMain from '../PrimaryMain';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route exact path={'/lang=:lang'} element={<PrimaryMain />} />
      </Routes>
    </div>
  );
};

export default Main;
