import React from 'react';
import { connect } from 'react-redux';

const Ticket = ({ dataTicket }) => {
  return (
    <div className="bookingTicket">
      <h6>Ваш заказ</h6>
      {dataTicket.city && dataTicket.deliveryPoint && (
        <div className="bookingTicket-address">
          <h5>Пункт выдачи</h5>
          <div className="bookingTicket-address__content">
            <div className="bookingTicket-city">
              <h5>{`${dataTicket.city},`}</h5>
            </div>
            <div className="bookingTicket-deliveryPoint">
              <h5>{dataTicket.deliveryPoint}</h5>
            </div>
          </div>
        </div>
      )}
      {dataTicket.car && (
        <div className="bookingTicket-car">
          <h5>Модель</h5>
          <div className="bookingTicket-car__content">
            <h5>{dataTicket.car}</h5>
          </div>
        </div>
      )}
      {dataTicket.color && (
        <div className="bookingTicket-color">
          <h5>Цвет</h5>
          <div className="bookingTicket-color__content">
            <h5>{dataTicket.color}</h5>
          </div>
        </div>
      )}
      {dataTicket.dateFrom && dataTicket.dateTo && (
        <div className="bookingTicket-date">
          <h5>Длительность аренды</h5>
          <div className="bookingTicket-date__content">
            <h5>-</h5>
          </div>
        </div>
      )}
      {dataTicket.tariff && (
        <div className="bookingTicket-tariff">
          <h5>Тариф</h5>
          <div className="bookingTicket-tariff__content">
            <h5>{dataTicket.tariff}</h5>
          </div>
        </div>
      )}
      {dataTicket.fullTank && (
        <div className="bookingTicket-fullTank">
          <h5>Полный бак</h5>
          <div className="bookingTicket-fullTank__content">
            <h5>Да</h5>
          </div>
        </div>
      )}
      {dataTicket.childSeat && (
        <div className="bookingTicket-childSeat">
          <h5>Детское кресло</h5>
          <div className="bookingTicket-childSeat__content">
            <h5>Да</h5>
          </div>
        </div>
      )}
      {dataTicket.rightHand && (
        <div className="bookingTicket-rightHand">
          <h5>Правый руль</h5>
          <div className="bookingTicket-rightHand__content">
            <h5>Да</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect((data) => ({ dataTicket: data.reducerStateBooking.data }))(Ticket);
