import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeStateRouting, changeStatePage } from '../../store/reducers/reducerStateReserve';

const BookingPageItems = ({ bookingPageActive, dataTicket, changeStateRouting, changeStatePage }) => {
  switch (bookingPageActive) {
    case 0:
      const [city, setCity] = useState(dataTicket.city);
      const [deliveryPoint, setDeliveryPoint] = useState(dataTicket.deliveryPoint);

      useEffect(() => {
        if (dataTicket.city && dataTicket.deliveryPoint) {
          changeStatePage('CHANGE_STATE_PAGES_0');
        }
      });

      return (
        <div className="bookingPage-location">
          <div className="bookingPage-address">
            <div className="bookingPage-city">
              <h5>Город</h5>
              <input
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);

                  if (e.target.value.replace(/ /g, '')) {
                    changeStateRouting('CHANGE_STATE_ROUTING_0', { city: e.target.value, deliveryPoint });
                  }
                }}
              />
            </div>
            <div className="bookingPage-deliveryPoint">
              <h5>Пункт выдачи</h5>
              <input
                value={deliveryPoint}
                onChange={(e) => {
                  setDeliveryPoint(e.target.value);

                  if (e.target.value.replace(/ /g, '')) {
                    changeStateRouting('CHANGE_STATE_ROUTING_0', { city, deliveryPoint: e.target.value });
                  }
                }}
              />
            </div>
          </div>
          <div className="bookingPage-location">
            <div className="bookingPage-map">
              <h5>Выбрать на карте</h5>
              <div className="bookingPage-map__content"></div>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="bookingPage-model">
          <div className="bookingPage-filter">
            <label>
              <input
                type="radio"
                name="filter-car"
                value=""
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <h5>Все модели</h5>
            </label>
            <label>
              <input
                type="radio"
                name="filter-car"
                value="true"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <h5>Эконом</h5>
            </label>
            <label>
              <input
                type="radio"
                name="filter-car"
                value="false"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <h5>Премиум</h5>
            </label>
          </div>
          <div className="bookingPage-cars"></div>
        </div>
      );
    case 2:
      return (
        <div className="bookingPage-additionally">
          <div className="bookingPage-color">
            <h5>Цвет</h5>
            <div className="bookingPage-color__content">
              <label>
                <input
                  type="radio"
                  name="filter-color"
                  value=""
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
                <h5>Любой</h5>
              </label>
            </div>
          </div>
          <div className="bookingPage-date">
            <h5>Дата аренды</h5>
            <div className="bookingPage-date__content">
              <div className="bookingPage-dateFrom">
                <h5>С</h5>
                <input type="date" />
              </div>
              <div className="bookingPage-dateTo">
                <h5>По</h5>
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="bookingPage-tarif">
            <h5>Тариф</h5>
            <div className="bookingPage-tarif__content">
              <label>
                <input
                  type="radio"
                  name="filter-tarif"
                  value=""
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
                <h5>Поминутно, 7₽/мин</h5>
              </label>
              <label>
                <input
                  type="radio"
                  name="filter-tarif"
                  value=""
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
                <h5>На сутки, 1999 ₽/сутки</h5>
              </label>
            </div>
          </div>
          <div className="bookingPage-services">
            <h5>Доп услуги</h5>
            <div className="bookingPage-services__content">
              <label>
                <input type="checkbox" />
                <h5>Полный бак, 500р</h5>
              </label>
              <label>
                <input type="checkbox" />
                <h5>Детское кресло, 200р</h5>
              </label>
              <label>
                <input type="checkbox" />
                <h5>Правый руль, 1600р</h5>
              </label>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="bookingPage-result">
          <div className="bookingPage-result__content"></div>
        </div>
      );
  }
};

export default connect((data) => ({ dataTicket: data.reducerStateReserve.data }), {
  changeStateRouting,
  changeStatePage,
})(BookingPageItems);
