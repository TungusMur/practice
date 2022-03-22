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
  stateRouting,
  changeStateRouting,
}) => {
  const navigation = useNavigate();
  const params = useParams();

  const dateFrom = new Date(dataTicket.dateFrom);
  const dateTo = new Date(dataTicket.dateTo);
  const daysBooking = Math.floor((dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24));
  const hoursBooking = Math.floor((dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600)) - daysBooking * 24;
  const minutesBooking =
    Math.floor((dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)) - (hoursBooking * 60 + daysBooking * 24 * 60);

  return (
    <div className="ticket">
      <div className="ticket-form">
        <div className="ticket-description">
          <h5>Ваш заказ:</h5>
        </div>
        {dataTicket.city && dataTicket.deliveryPoint && stateRouting[0] && (
          <div className="ticket-address">
            <p>Пункт выдачи</p>
            <div className="ticket-address__content">
              <div className="ticket-city">
                <p>{`${dataTicket.city.name},`}</p>
              </div>
              <div className="ticket-deliveryPoint">
                <p>{dataTicket.deliveryPoint.address}</p>
              </div>
            </div>
            <div className="ticket-dottedLine"></div>
          </div>
        )}
        {dataTicket.car && stateRouting[1] && (
          <div className="ticket-car">
            <p>Модель</p>
            <div className="ticket-car__content">
              <p>{dataTicket.car.name}</p>
            </div>
            <div className="ticket-dottedLine"></div>
          </div>
        )}
        {dataTicket.color && stateRouting[2] && (
          <div className="ticket-color">
            <p>Цвет</p>
            <div className="ticket-color__content">
              <p>{dataTicket.color}</p>
            </div>
            <div className="ticket-dottedLine"></div>
          </div>
        )}
        {dataTicket.dateFrom && dataTicket.dateTo && stateRouting[2] && (
          <div className="ticket-date">
            <p>Длительность аренды</p>
            <div className="ticket-date__content">
              {Boolean(daysBooking) && (
                <>
                  <p className="ticket-date__info">{daysBooking}</p>
                  <p>д</p>
                </>
              )}
              {Boolean(hoursBooking) && (
                <>
                  <p className="ticket-date__info">{hoursBooking}</p>
                  <p>ч</p>
                </>
              )}
              {Boolean(minutesBooking) && (
                <>
                  <p className="ticket-date__info">{minutesBooking}</p>
                  <p>м</p>
                </>
              )}
            </div>
            <div className="ticket-dottedLine"></div>
          </div>
        )}
        {dataTicket.tariff && stateRouting[2] && (
          <div className="ticket-tariff">
            <p>Тариф</p>
            <div className="ticket-tariff__content">
              <p>{dataTicket.tariff.rateTypeId.name}</p>
            </div>
            <div className="ticket-dottedLine"></div>
          </div>
        )}
        {dataTicket.fullTank && stateRouting[2] && (
          <div className="ticket-fullTank">
            <p>Полный бак</p>
            <div className="ticket-fullTank__content">
              <p>Да</p>
            </div>
            <div className="ticket-dottedLine"></div>
          </div>
        )}
        {dataTicket.childSeat && stateRouting[2] && (
          <div className="ticket-childSeat">
            <p>Детское кресло</p>
            <div className="ticket-childSeat__content">
              <p>Да</p>
            </div>
            <div className="ticket-dottedLine"></div>
          </div>
        )}
        {dataTicket.rightHand && stateRouting[2] && (
          <div className="ticket-rightHand">
            <p>Правый руль</p>
            <div className="ticket-rightHand__content">
              <p>Да</p>
            </div>
            <div className="ticket-dottedLine"></div>
          </div>
        )}
        {(Boolean(dataTicket.price) || (Boolean(dataTicket.priceMin) && Boolean(dataTicket.priceMax))) &&
          stateRouting[1] && (
            <div className="ticket-price">
              <div className="ticket-price__content">
                <h5>Цена:</h5>
                {Boolean(dataTicket.price) && (
                  <h5 className="ticket-price__info">
                    {dataTicket.price +
                      (dataTicket.fullTank && 500) +
                      (dataTicket.childSeat && 200) +
                      (dataTicket.rightHand && 1600)}
                    ₽
                  </h5>
                )}
                {!Boolean(dataTicket.price) && Boolean(dataTicket.priceMin) && Boolean(dataTicket.priceMax) && (
                  <h5 className="ticket-price__info">
                    от {dataTicket.priceMin} до {dataTicket.priceMax} ₽
                  </h5>
                )}
              </div>
              {Boolean(dataTicket.price) &&
                !(
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
                ) && (
                  <p className="ticket-price__error">
                    Сумма заказ не должна быть меньше {dataTicket.priceMin} ₽ или больше {dataTicket.priceMax} ₽,
                    поменяйте пожалуйста параметры аренды
                  </p>
                )}
            </div>
          )}
      </div>
      <button
        className={`ticket__button button-classic ${statePage[bookingPageActive] || 'notActive'}`}
        onClick={() => {
          if (statePage[bookingPageActive] && bookingPageActive !== 3) {
            setBookingPageActive((state) => (state += 1));
            navigation(bookingNavigationItems[bookingPageActive + 1].link);
            changeStateRouting(`CHANGE_STATE_ROUTING_${bookingPageActive + 1}`);
            window.scrollTo(0, 0);
          } else if (statePage[bookingPageActive] && bookingPageActive === 3) {
          }
        }}
      >
        {bookingNavigationItems[bookingPageActive][`${params.lang}ButtonContent`]}
      </button>
    </div>
  );
};

export default connect(
  (data) => ({
    dataTicket: data.reducerTicketData,
    statePage: data.reducerStateBooking.statePage,
    stateRouting: data.reducerStateBooking.stateRouting,
  }),
  { changeStateRouting }
)(Ticket);
