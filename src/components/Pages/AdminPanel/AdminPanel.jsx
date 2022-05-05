import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { postRefresh } from '../../../Actions';
import Authorization from '../Authorization';
import './styles.scss';

const AdminPanel = ({ dataAuthorization, postRefresh }) => {
  useEffect(() => {
    if (dataAuthorization.statusRefresh === 200 || !dataAuthorization.statusRefresh) {
      setTimeout(postRefresh, dataAuthorization.expiresIn, localStorage.refresh_token);
    }
  }, [dataAuthorization.statusRefresh, dataAuthorization.statusLogin]);

  return (
    <div className="adminPanel">
      <main>
        <Routes>
          {dataAuthorization.loading ? (
            <Route path="*" element={<h1>Загрузка...</h1>} />
          ) : dataAuthorization.statusRefresh === 200 || dataAuthorization.statusLogin === 200 ? (
            <>
              <Route path="/asd" element={<h1>asd</h1>} />
              <Route path="*" element={<h1>*</h1>} />
            </>
          ) : (
            <Route path="*" element={<Authorization />} />
          )}
        </Routes>
      </main>
    </div>
  );
};

export default connect((data) => ({ dataAuthorization: data.reducerAuthorizationState }), { postRefresh })(AdminPanel);
