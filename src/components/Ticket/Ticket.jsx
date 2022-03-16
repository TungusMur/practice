import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeStateRouting } from '../../redux/reducers/reducerStateBooking';
import './styles.scss';

const Ticket = ({
  bookingPageActive,
  setBookingPageActive,
  bookingNavigationItems,
  dataTicket,
  statePage,
  changeStateRouting,
}) => {
  const navigation = useNavigate();
  const params = useParams();

  return (
    <div className="ticket">
      <div className="ticket-form">
        <div className="ticket-description">
          <h5>Ваш заказ:</h5>
        </div>
        {dataTicket.city && dataTicket.deliveryPoint && (
          <div className="ticket-address">
            <p>Пункт выдачи</p>
            <div className="ticket-address__content">
              <div className="ticket-city">
                <p>{`${dataTicket.city},`}</p>
              </div>
              <div className="ticket-deliveryPoint">
                <p>{dataTicket.deliveryPoint}</p>
              </div>
            </div>
          </div>
        )}
        {dataTicket.car && (
          <div className="ticket-car">
            <p>Модель</p>
            <div className="ticket-car__content">
              <p>{dataTicket.car}</p>
            </div>
          </div>
        )}
        {dataTicket.color && (
          <div className="ticket-color">
            <p>Цвет</p>
            <div className="ticket-color__content">
              <p>{dataTicket.color}</p>
            </div>
          </div>
        )}
        {dataTicket.dateFrom && dataTicket.dateTo && (
          <div className="ticket-date">
            <p>Длительность аренды</p>
            <div className="ticket-date__content">
              <p>-</p>
            </div>
          </div>
        )}
        {dataTicket.tariff && (
          <div className="ticket-tariff">
            <p>Тариф</p>
            <div className="ticket-tariff__content">
              <p>{dataTicket.tariff}</p>
            </div>
          </div>
        )}
        {dataTicket.fullTank && (
          <div className="ticket-fullTank">
            <p>Полный бак</p>
            <div className="ticket-fullTank__content">
              <p>Да</p>
            </div>
          </div>
        )}
        {dataTicket.childSeat && (
          <div className="ticket-childSeat">
            <p>Детское кресло</p>
            <div className="ticket-childSeat__content">
              <p>Да</p>
            </div>
          </div>
        )}
        {dataTicket.rightHand && (
          <div className="ticket-rightHand">
            <p>Правый руль</p>
            <div className="ticket-rightHand__content">
              <p>Да</p>
            </div>
          </div>
        )}
      </div>
      <button
        className={`ticket__button button-classic ${statePage[bookingPageActive] || 'notActive'}`}
        onClick={() => {
          if (statePage[bookingPageActive]) {
            setBookingPageActive((state) => (state += 1));
            navigation(bookingNavigationItems[bookingPageActive + 1].link);
            changeStateRouting(`CHANGE_STATE_ROUTING_${bookingPageActive + 1}`);
          }
        }}
      >
        {bookingNavigationItems[bookingPageActive][`${params.lang}ButtonContent`]}
      </button>
    </div>
  );
};

export default connect(
  (data) => ({ dataTicket: data.reducerStateBooking.data, statePage: data.reducerStateBooking.statePage }),
  { changeStateRouting }
)(Ticket);
