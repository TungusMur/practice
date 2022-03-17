import React from 'react';
import { CHANGE_STATE_ROUTING_2 } from '../../redux/action';
import { changeStateRouting } from '../../redux/reducers/reducerStateBooking';
import { changeTicket } from '../../Actions';
import { connect } from 'react-redux';

const SettingTariff = ({ dataTicket, dataRates, changeTicket }) => {
  return (
    <div className="selectAdditionally-tariff">
      <p>Тариф</p>
      <div className="selectAdditionally-tariff__content">
        {dataRates.data.map((item) => (
          <label
            key={item.id}
            className={`selectAdditionally-tariff__item ${dataTicket.tariff.id === item.id ? 'active' : ''}`}
          >
            <input
              id="filterTarif"
              type="radio"
              name="filter-tarif"
              value="Поминутно"
              onChange={() => {
                changeTicket({ tariff: item, price: 0 });
                changeStateRouting(CHANGE_STATE_ROUTING_2);
              }}
              checked={dataTicket.tariff.id === item.id}
            />
            <p>{`${item.rateTypeId.name}, ${item.price} ₽/${item.rateTypeId.unit}`}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData, dataRates: data.reducerRatesData }), {
  changeTicket,
})(SettingTariff);
