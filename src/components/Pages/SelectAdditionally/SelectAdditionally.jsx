import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SettingColor from '../../../components/SettingColor';
import SettingDate from '../../../components/SettingDate';
import SettingTariff from '../../../components/SettingTariff';
import SettingServices from '../../../components/SettingServices';
import { TariffTime } from './constants';
import { connect } from 'react-redux';
import { changeStatePage } from '../../../redux/reducers/reducerStateBooking';
import { changeTicket } from '../../../Actions';
import { CHANGE_STATE_PAGES_2, CHANGE_STATE_PAGES_1 } from '../../../redux/action';
import './styles.scss';

const SelectAdditionally = ({ dataTicket, changeTicket, changeStatePage }) => {
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!(dataTicket.city && dataTicket.deliveryPoint)) {
      navigation(`/${params.lang}/reserve/location`);
    }
  }, []);

  useEffect(() => {
    if (
      dataTicket.color &&
      dataTicket.dateFrom &&
      dataTicket.dateTo &&
      dataTicket.tariff &&
      dataTicket.price <= dataTicket.priceMax &&
      dataTicket.price >= dataTicket.priceMin
    ) {
      changeStatePage(CHANGE_STATE_PAGES_2);
    } else {
      changeStatePage(CHANGE_STATE_PAGES_1);
    }
  }, [dataTicket.color, dataTicket.dateFrom, dataTicket.dateTo, dataTicket.tariff, dataTicket.price]);

  return (
    dataTicket.city &&
    dataTicket.deliveryPoint && (
      <div className="selectAdditionally-additionally">
        <SettingColor />
        <SettingDate />
        <SettingTariff />
        <SettingServices />
      </div>
    )
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData }), {
  changeTicket,
  changeStatePage,
})(SelectAdditionally);