import React from 'react';
import { TariffTime } from './constants';
import { CHANGE_STATE_ROUTING_2 } from '../../redux/action';
import { changeStateRouting } from '../../redux/reducers/reducerStateBooking';
import { changeTicket } from '../../Actions';
import { connect } from 'react-redux';
import './styles.scss';

const SettingTariff = ({ dataTicket, dataRates, changeTicket }) => {
  return (
    <div className="settingTariff">
      <p>Тариф</p>
      <div className="settingTariff__content">
        {dataRates.data
          .filter((item) => item.rateTypeId)
          .map((item) => (
            <label
              key={item.id}
              className={`settingTariff__item ${dataTicket.tariff.id === item.id ? 'active' : ''}`}
            >
              <input
                id="filterTariff"
                type="radio"
                name="filter-tarif"
                value="Поминутно"
                onChange={() => {
                  changeTicket({
                    tariff: item,
                    price:
                      dataTicket.dateFrom && dataTicket.dateTo
                        ? Math.ceil(
                            (new Date(dataTicket.dateTo).getTime() - new Date(dataTicket.dateFrom).getTime()) /
                              TariffTime[item.rateTypeId.unit]
                          ) * item.price
                        : 0,
                  });
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
