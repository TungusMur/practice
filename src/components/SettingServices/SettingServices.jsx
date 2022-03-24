import React from 'react';
import check from '../../assets/img/Booking/Check.svg';
import { CHANGE_STATE_ROUTING_2 } from '../../redux/action';
import { changeStateRouting } from '../../redux/reducers/reducerStateBooking';
import { changeTicket } from '../../Actions';
import { connect } from 'react-redux';
import './styles.scss';

const SettingServices = ({ dataTicket, changeTicket, changeStateRouting }) => {
  return (
    <div className="settingServices">
      <p>Доп услуги</p>
      <div className="settingServices__content">
        <label className={`settingServices__item ${dataTicket.fullTank && 'active'}`}>
          <input
            id="filterServices"
            type="checkbox"
            onChange={() => {
              changeTicket({
                fullTank: !dataTicket.fullTank,
              });
              changeStateRouting(CHANGE_STATE_ROUTING_2);
            }}
            checked={dataTicket.fullTank}
          />
          <img alt="check" src={check} />
          <p>Полный бак, 500р</p>
        </label>
        <label className={`settingServices__item ${dataTicket.childSeat && 'active'}`}>
          <input
            id="filterServices"
            type="checkbox"
            onChange={() => {
              changeTicket({
                childSeat: !dataTicket.childSeat,
              });
              changeStateRouting(CHANGE_STATE_ROUTING_2);
            }}
            checked={dataTicket.childSeat}
          />
          <img alt="check" src={check} />
          <p>Детское кресло, 200р</p>
        </label>
        <label className={`settingServices__item ${dataTicket.rightHand && 'active'}`}>
          <input
            id="filterServices"
            type="checkbox"
            onChange={() => {
              changeTicket({
                rightHand: !dataTicket.rightHand,
              });
              changeStateRouting(CHANGE_STATE_ROUTING_2);
            }}
            checked={dataTicket.rightHand}
          />
          <img alt="check" src={check} />
          <p>Правый руль, 1600р</p>
        </label>
      </div>
    </div>
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData }), { changeTicket, changeStateRouting })(
  SettingServices
);
