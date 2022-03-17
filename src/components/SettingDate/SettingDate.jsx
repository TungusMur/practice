import React, { useEffect } from 'react';
import { CHANGE_STATE_ROUTING_2 } from '../../redux/action';
import { changeStateRouting } from '../../redux/reducers/reducerStateBooking';
import { changeTicket } from '../../Actions';
import { connect } from 'react-redux';

const SettingData = ({ dataTicket, changeTicket, changeStateRouting }) => {
  return (
    <div className="selectAdditionally-date">
      <p>Дата аренды</p>
      <div className="selectAdditionally-date__content">
        <div className="selectAdditionally-dateFrom">
          <p>С</p>
          <input
            id="filterDate"
            min={new Date(new Date().getTime() + 1000 * 3600 * 24).toISOString().match(/\w+-\w+-\w+:\w+/)}
            type="datetime-local"
            value={dataTicket.dateFrom}
            onChange={(e) => {
              changeTicket({ dateFrom: e.target.value, dateTo: '', price: 0 });
              changeStateRouting(CHANGE_STATE_ROUTING_2);
            }}
          />
        </div>
        <div className="selectAdditionally-dateTo">
          <p>По</p>
          <input
            id="filterDate"
            min={dataTicket.dateFrom}
            type="datetime-local"
            value={dataTicket.dateTo}
            onChange={(e) => {
              changeTicket({ dateTo: e.target.value, price: 0 });
              changeStateRouting(CHANGE_STATE_ROUTING_2);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData }), { changeTicket, changeStateRouting })(
  SettingData
);
