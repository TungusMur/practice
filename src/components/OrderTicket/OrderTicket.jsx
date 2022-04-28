import React from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { cancelOrder } from '../../Actions';
import './styles.scss';

const OrderTicket = ({ dataOrder, cancelOrder }) => {
  const params = useParams();
  const navigation = useNavigate();
  const dateFrom = new Date(dataOrder.data.dateFrom);
  const dateTo = new Date(dataOrder.data.dateTo);
  const daysBooking = Math.floor((dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24));
  const hoursBooking = Math.floor((dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600)) - daysBooking * 24;
  const minutesBooking =
    Math.floor((dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)) - (hoursBooking * 60 + daysBooking * 24 * 60);

  return (
    <>
      {dataOrder.loading ? null : dataOrder.status === 200 ? (
        <div className="orderTicket">
          <div className="orderTicket-form">
            <div className="orderTicket-description">
              <h5>Ваш заказ:</h5>
            </div>
            <div className="orderTicket-address">
              <p>Пункт выдачи</p>
              <div className="orderTicket-address__content">
                <div className="orderTicket-city">
                  <p>{`${dataOrder.data.cityId.name},`}</p>
                </div>
                <div className="orderTicket-deliveryPoint">
                  <p>{dataOrder.data.pointId.address}</p>
                </div>
              </div>
              <div className="orderTicket-dottedLine"></div>
            </div>
            <div className="orderTicket-car">
              <p>Модель</p>
              <div className="orderTicket-car__content">
                <p>{dataOrder.data.carId.name}</p>
              </div>
              <div className="orderTicket-dottedLine"></div>
            </div>
            <div className="orderTicket-color">
              <p>Цвет</p>
              <div className="orderTicket-color__content">
                <p>{dataOrder.data.color}</p>
              </div>
              <div className="orderTicket-dottedLine"></div>
            </div>
            <div className="orderTicket-date">
              <p>Длительность аренды</p>
              <div className="orderTicket-date__content">
                {Boolean(daysBooking) && (
                  <>
                    <p className="orderTicket-date__info">{daysBooking}</p>
                    <p>д</p>
                  </>
                )}
                {Boolean(hoursBooking) && (
                  <>
                    <p className="orderTicket-date__info">{hoursBooking}</p>
                    <p>ч</p>
                  </>
                )}
                {Boolean(minutesBooking) && (
                  <>
                    <p className="orderTicket-date__info">{minutesBooking}</p>
                    <p>м</p>
                  </>
                )}
              </div>{' '}
              <div className="orderTicket-dottedLine"></div>
            </div>
            <div className="orderTicket-tariff">
              <p>Тариф</p>
              <div className="orderTicket-tariff__content">
                <p>{dataOrder.data.rateId.rateTypeId.name}</p>
              </div>
              <div className="orderTicket-dottedLine"></div>
            </div>
            {dataOrder.data.isFullTank && (
              <div className="orderTicket-fullTank">
                <p>Полный бак</p>
                <div className="orderTicket-fullTank__content">
                  <p>Да</p>
                </div>
                <div className="orderTicket-dottedLine"></div>
              </div>
            )}
            {dataOrder.data.isNeedChildChair && (
              <div className="orderTicket-childSeat">
                <p>Детское кресло</p>
                <div className="orderTicket-childSeat__content">
                  <p>Да</p>
                </div>
                <div className="orderTicket-dottedLine"></div>
              </div>
            )}
            {dataOrder.data.isRightWheel && (
              <div className="orderTicket-rightHand">
                <p>Правый руль</p>
                <div className="orderTicket-rightHand__content">
                  <p>Да</p>
                </div>
                <div className="orderTicket-dottedLine"></div>
              </div>
            )}
            <div className="orderTicket-price">
              <div className="orderTicket-price__content">
                <h5>Цена:</h5>
                <h5 className="orderTicket-price__info">{dataOrder.data.price}₽</h5>
              </div>
            </div>
          </div>
          {dataOrder.data.orderStatusId.name === 'Подтвержденные' && (
            <button
              className={`orderTicket__button button-id2 `}
              onClick={() => {
                cancelOrder(dataOrder.data.id);
                navigation(`${location.pathname.match(/.+\/(ru|en)/)[0]}/`);
              }}
            >
              Отменить
            </button>
          )}
        </div>
      ) : null}
    </>
  );
};

export default connect((data) => ({ dataOrder: data.reducerOrderData }), { cancelOrder })(OrderTicket);
