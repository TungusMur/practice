import React, { useEffect, useState } from 'react';
import logo from '../../../assets/img/Admin/Logo.svg';
import './styles.scss';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stateActive, setStateActive] = useState('');

  useEffect(() => {
    if (email && password) {
      setStateActive('active');
    } else {
      setStateActive('');
    }
  }, [email, password]);

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
            <div className="authorization-email">
              <p>Почта</p>
              <input
                type="email"
                className="authorization-action__input"
                placeholder="Введите почту"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="authorization-password">
              <p>Пароль</p>
              <input
                type="password"
                className="authorization-action__input"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="authorization-enter">
              <button className={`authorization-action__button authorization-registration ${stateActive}`}>
                Запросить доступ
              </button>
              <button className={`authorization-action__button authorization-login ${stateActive}`}>Войти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
