import React from 'react';
import { CHANGE_STATE_ROUTING_2 } from '../../redux/action';
import { changeStateRouting } from '../../redux/reducers/reducerStateBooking';
import { changeTicket } from '../../Actions';
import { connect } from 'react-redux';
import './styles.scss';

const SettingColor = ({ dataTicket, changeTicket, changeStateRouting }) => {
  return (
    <div className="settingColor">
      <p>Цвет</p>
      <div className="settingColor__content">
        <label className={`settingColor__item ${dataTicket.color === 'Любой' ? 'active' : ''}`}>
          <input
            id="filterColor"
            type="radio"
            name="filter-color"
            value={'Любой'}
            onChange={(e) => {
              changeTicket({ color: e.target.value });
              changeStateRouting(CHANGE_STATE_ROUTING_2);
            }}
            checked={dataTicket.color === 'Любой'}
          />
          <p>Любой</p>
        </label>
        {dataTicket.car.colors &&
          [...dataTicket.car.colors].map((item, index) => (
            <label
              className={`settingColor__item ${dataTicket.color === item ? 'active' : ''}`}
              key={index + item}
            >
              <input
                id="filterColor"
                type="radio"
                name="filter-color"
                value={item}
                onChange={(e) => {
                  changeTicket({ color: e.target.value });
                  changeStateRouting(CHANGE_STATE_ROUTING_2);
                }}
                checked={dataTicket.color === item}
              />
              <p>{item}</p>
            </label>
          ))}
      </div>
    </div>
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData }), { changeTicket, changeStateRouting })(
  SettingColor
);
