import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeStateRouting } from '../../redux/reducers/reducerStateBooking';
import { changeVerificationState } from '../../Actions';
import './styles.scss';

const BookingTicket = ({
  bookingPageActive,
  bookingNavigationItems,
  dataTicket,
  statePage,
  stateRouting,
  changeStateRouting,
  changeVerificationState,
}) => {
  const navigation = useNavigate();

  const dateFrom = new Date(dataTicket.dateFrom);
  const dateTo = new Date(dataTicket.dateTo);
  const daysBooking = Math.floor((dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24));
  const hoursBooking = Math.floor((dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600)) - daysBooking * 24;
  const minutesBooking =
    Math.floor((dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)) - (hoursBooking * 60 + daysBooking * 24 * 60);

  return (
    <div className="bookingTicket">
      <div className="bookingTicket-form">
        <div className="bookingTicket-description">
          <h5>Ваш заказ:</h5>
        </div>
        {dataTicket.city && dataTicket.deliveryPoint && stateRouting[0] && (
          <div className="bookingTicket-address">
            <p>Пункт выдачи</p>
            <div className="bookingTicket-address__content">
              <div className="bookingTicket-city">
                <p>{`${dataTicket.city.name},`}</p>
              </div>
              <div className="bookingTicket-deliveryPoint">
                <p>{dataTicket.deliveryPoint.address}</p>
              </div>
            </div>
            <div className="bookingTicket-dottedLine"></div>
          </div>
        )}
        {dataTicket.car && stateRouting[1] && (
          <div className="bookingTicket-car">
            <p>Модель</p>
            <div className="bookingTicket-car__content">
              <p>{dataTicket.car.name}</p>
            </div>
            <div className="bookingTicket-dottedLine"></div>
          </div>
        )}
        {dataTicket.color && stateRouting[2] && (
          <div className="bookingTicket-color">
            <p>Цвет</p>
            <div className="bookingTicket-color__content">
              <p>{dataTicket.color}</p>
            </div>
            <div className="bookingTicket-dottedLine"></div>
          </div>
        )}
        {dataTicket.dateFrom && dataTicket.dateTo && stateRouting[2] && (
          <div className="bookingTicket-date">
            <p>Длительность аренды</p>
            <div className="bookingTicket-date__content">
              {Boolean(daysBooking) && (
                <>
                  <p className="bookingTicket-date__info">{daysBooking}</p>
                  <p>д</p>
                </>
              )}
              {Boolean(hoursBooking) && (
                <>
                  <p className="bookingTicket-date__info">{hoursBooking}</p>
                  <p>ч</p>
                </>
              )}
              {Boolean(minutesBooking) && (
                <>
                  <p className="bookingTicket-date__info">{minutesBooking}</p>
                  <p>м</p>
                </>
              )}
            </div>
            <div className="bookingTicket-dottedLine"></div>
          </div>
        )}
        {dataTicket.tariff && stateRouting[2] && (
          <div className="bookingTicket-tariff">
            <p>Тариф</p>
            <div className="bookingTicket-tariff__content">
              <p>{dataTicket.tariff.rateTypeId.name}</p>
            </div>
            <div className="bookingTicket-dottedLine"></div>
          </div>
        )}
        {dataTicket.fullTank && stateRouting[2] && (
          <div className="bookingTicket-fullTank">
            <p>Полный бак</p>
            <div className="bookingTicket-fullTank__content">
              <p>Да</p>
            </div>
            <div className="bookingTicket-dottedLine"></div>
          </div>
        )}
        {dataTicket.childSeat && stateRouting[2] && (
          <div className="bookingTicket-childSeat">
            <p>Детское кресло</p>
            <div className="bookingTicket-childSeat__content">
              <p>Да</p>
            </div>
            <div className="bookingTicket-dottedLine"></div>
          </div>
        )}
        {dataTicket.rightHand && stateRouting[2] && (
          <div className="bookingTicket-rightHand">
            <p>Правый руль</p>
            <div className="bookingTicket-rightHand__content">
              <p>Да</p>
            </div>
            <div className="bookingTicket-dottedLine"></div>
          </div>
        )}
        {(Boolean(dataTicket.price) || (Boolean(dataTicket.priceMin) && Boolean(dataTicket.priceMax))) &&
          stateRouting[1] && (
            <div className="bookingTicket-price">
              <div className="bookingTicket-price__content">
                <h5>Цена:</h5>
                {Boolean(dataTicket.price) && (
                  <h5 className="bookingTicket-price__info">
                    {dataTicket.price +
                      (dataTicket.fullTank && 500) +
                      (dataTicket.childSeat && 200) +
                      (dataTicket.rightHand && 1600)}
                    ₽
                  </h5>
                )}
                {!Boolean(dataTicket.price) && Boolean(dataTicket.priceMin) && Boolean(dataTicket.priceMax) && (
                  <h5 className="bookingTicket-price__info">
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
                  <p className="bookingTicket-price__error">
                    Сумма заказ не должна быть меньше {dataTicket.priceMin} ₽ или больше {dataTicket.priceMax} ₽,
                    поменяйте пожалуйста параметры аренды
                  </p>
                )}
            </div>
          )}
      </div>
      <button
        className={`bookingTicket__button button-classic ${statePage[bookingPageActive] || 'notActive'}`}
        onClick={() => {
          if (statePage[bookingPageActive] && bookingPageActive !== 3) {
            navigation(bookingNavigationItems[bookingPageActive + 1].link);
            changeStateRouting(`CHANGE_STATE_ROUTING_${bookingPageActive + 1}`);
            window.scrollTo(0, 0);
          } else if (statePage[bookingPageActive] && bookingPageActive === 3) {
            changeVerificationState(true);
          }
        }}
      >
        {bookingNavigationItems[bookingPageActive][`ruButtonContent`]}
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
  { changeStateRouting, changeVerificationState }
)(BookingTicket);
