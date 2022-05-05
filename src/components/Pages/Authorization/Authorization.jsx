import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { postLogin, postRegister, resetLogin } from '../../../Actions';
import logo from '../../../assets/img/Admin/Logo.svg';
import './styles.scss';

const Authorization = ({ dataAuthorization, postLogin, postRegister, resetLogin }) => {
  const [dataUser, setDataUser] = useState({ username: '', password: '' });
  const [errorStatus, setErrorStatus] = useState('');

  useEffect(() => {
    setErrorStatus(dataAuthorization.statusLogin);
  }, [dataAuthorization.statusLogin]);

  return (
    <div className="authorization">
      <div className="authorization-form">
        <div className="authorization-logo">
          <img alt="logo" src={logo} />
          <h6>Need for drive</h6>
        </div>
        <div className="authorization-content">
          <h5>Вход</h5>
          <div className="authorization-action">
            <div className="authorization-username">
              <p>Почта</p>
              <input
                type="username"
                className={`authorization-action__input ${errorStatus === 200 || !errorStatus ? '' : 'error'}`}
                placeholder="Введите почту или логин"
                value={dataUser.username}
                onChange={(e) => {
                  setDataUser((data) => ({ ...data, username: e.target.value }));
                }}
                onFocus={() => {
                  resetLogin();
                }}
              />
            </div>
            <div className="authorization-password">
              <p>Пароль</p>
              <input
                type="password"
                className={`authorization-action__input ${errorStatus === 200 || !errorStatus ? '' : 'error'}`}
                placeholder="Введите пароль"
                value={dataUser.password}
                onChange={(e) => {
                  setDataUser((data) => ({ ...data, password: e.target.value }));
                }}
                onFocus={() => {
                  resetLogin();
                }}
              />
            </div>
            <div className="authorization-error">{errorStatus && <p>Неправельный логин или пароль</p>}</div>
            <div className="authorization-enter">
              <button
                className={`authorization-action__button authorization-registration ${
                  dataUser.username && dataUser.password ? 'active' : ''
                }`}
                onClick={() => {
                  if (dataUser.username && dataUser.password) {
                    postRegister(dataUser);
                    setDataUser({ username: '', password: '' });
                  }
                }}
              >
                Запросить доступ
              </button>
              <button
                className={`authorization-action__button authorization-login ${
                  dataUser.username && dataUser.password ? 'active' : ''
                }`}
                onClick={() => {
                  if (dataUser.username && dataUser.password) {
                    postLogin(dataUser);
                    setDataUser((data) => ({ ...data, password: '' }));
                  }
                }}
              >
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((data) => ({ dataAuthorization: data.reducerAuthorizationState }), {
  postLogin,
  postRegister,
  resetLogin,
})(Authorization);
