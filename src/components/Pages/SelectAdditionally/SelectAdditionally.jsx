import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SettingColor from '../../../components/SettingColor';
import SettingDate from '../../../components/SettingDate';
import SettingTariff from '../../../components/SettingTariff';
import SettingServices from '../../../components/SettingServices';
import { connect } from 'react-redux';
import { changeStatePage } from '../../../redux/reducers/reducerStateBooking';
import { CHANGE_STATE_PAGES_2, CHANGE_STATE_PAGES_1 } from '../../../redux/action';
import './styles.scss';

const SelectAdditionally = ({ dataTicket, changeStatePage }) => {
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!(dataTicket.city && dataTicket.deliveryPoint)) {
      navigation(`${location.pathname.match(/.+\/(ru|en)/)[0]}/reserve/location`);
    }
  }, []);

  useEffect(() => {
    if (
      dataTicket.color &&
      dataTicket.dateFrom &&
      dataTicket.dateTo &&
      dataTicket.tariff &&
      dataTicket.price +
        (dataTicket.fullTank && 500) +
        (dataTicket.childSeat && 200) +
        (dataTicket.rightHand && 1600) <=
        dataTicket.priceMax &&
      dataTicket.price +
        (dataTicket.fullTank && 500) +
        (dataTicket.childSeat && 200) +
        (dataTicket.rightHand && 1600) >=
        dataTicket.priceMin
    ) {
      changeStatePage(CHANGE_STATE_PAGES_2);
    } else {
      changeStatePage(CHANGE_STATE_PAGES_1);
    }
  }, [
    dataTicket.color,
    dataTicket.dateFrom,
    dataTicket.dateTo,
    dataTicket.tariff,
    dataTicket.price,
    dataTicket.fullTank,
    dataTicket.childSeat,
    dataTicket.rightHand,
  ]);

  return (
    dataTicket.city &&
    dataTicket.deliveryPoint && (
      <div className="selectAdditionally">
        <SettingColor />
        <SettingDate />
        <SettingTariff />
        <SettingServices />
      </div>
    )
  );
};

export default connect((data) => ({ dataTicket: data.reducerTicketData }), {
  changeStatePage,
})(SelectAdditionally);
